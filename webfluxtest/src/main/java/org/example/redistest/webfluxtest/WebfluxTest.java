package org.example.redistest.webfluxtest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Range;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

import java.util.*;

@RestController
@RequestMapping("/test")
public class WebfluxTest {

    private Logger logger = LoggerFactory.getLogger(WebfluxTest.class);

    @Autowired
    @Qualifier("reactiveRedisTemplate")
    private ReactiveRedisTemplate redisTemplate;

    @Autowired
    private Scheduler parallelScheduler;

    private static Random random = new Random();

    @GetMapping(path="/authorize/{user}")
    public Mono<List<String>> authorize(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        Flux<String> fluxAppResList = redisTemplate.opsForZSet().rangeByLex("appidx",
                Range.of(Range.Bound.inclusive(app + "|"), Range.Bound.exclusive(app + "}")));
        long et1 = System.currentTimeMillis();
        //logger.info("Outer redis appidx query cost: {}", (et1-bt1));
        long bt2 = System.currentTimeMillis();
        Flux<ResourceNode> fluxResNodeList = fluxAppResList.flatMap((String appRes) -> {
            long ibt = System.currentTimeMillis();
            int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
            if (-1 == pos) {
                pos = appRes.indexOf(ResourceNode.APP_SEP);
            }
            String name = appRes.substring(pos + 1);
            String parentFqn = appRes.substring(0, pos);
            ResourceNode resourceNode = new ResourceNode(name, parentFqn);
            long iet = System.currentTimeMillis();
            //logger.debug("Inner generate resourceNode for {} cost: {}", appRes, (iet-ibt));
            return Mono.just(resourceNode);
        }).publishOn(parallelScheduler);
        long et2 = System.currentTimeMillis();
        //logger.info("Outer generate resourceNode cost: {}", (et2-bt2));
        long bt3 = System.currentTimeMillis();
        Mono<Map<String, ResourceNode>> monoResourceNodeMap = fluxResNodeList.collectMap(
                key -> {
                    return key.getFqn();
                }, val -> val
        ).publishOn(parallelScheduler);
        long et3 = System.currentTimeMillis();
        //logger.info("Outer generate monoResourceNodeMap cost: {}", (et3-bt3));
        long bt4 = System.currentTimeMillis();
        Mono<Map<String, ResourceNode>> monoResourceNodeMap1 = monoResourceNodeMap.map(map -> {
            long ibt = System.currentTimeMillis();
            Set<Map.Entry<String, ResourceNode>> entrySet = map.entrySet();
            for (Map.Entry<String, ResourceNode> entry : entrySet) {
                ResourceNode resourceNode = entry.getValue();
                ResourceNode parentNode = map.get(resourceNode.getParentFqn());
                //logger.debug("resource: {}, parent node: {}", entry.getKey(), parentNode);
                if (null != parentNode) {
                    parentNode.addChild(resourceNode);
                    //logger.debug("resource: {}, children length: {}", parentNode.getFqn(), parentNode.getChildren().size());
                }
            }
            long iet = System.currentTimeMillis();
            //logger.debug("Inner set resourceNode children cost: {}", (iet-ibt));
            return map;
        }).publishOn(parallelScheduler);
        long et4 = System.currentTimeMillis();
        //logger.info("Outer set resourceNode children cost: {}", (et4-bt4));
        long bt5 = System.currentTimeMillis();
        Flux<String> fluxU2rList = redisTemplate.opsForZSet().rangeByLex("user2roleidx",
                Range.of(Range.Bound.inclusive(user + "|"), Range.Bound.exclusive(user + "}")));
        long et5 = System.currentTimeMillis();
        //logger.info("Outer redix user2roleidx query cost: {}", (et5-bt5));
        long bt6 = System.currentTimeMillis();
        Flux<String> fluxRolesList = fluxU2rList.flatMap(u2r -> {
            return Mono.just(u2r.split("\\|")[1]);
        }).publishOn(parallelScheduler);
        long et6 = System.currentTimeMillis();
        //logger.info("Outer process u2r cost: {}", (et6-bt6));

        long bt7 = System.currentTimeMillis();
        Flux<String> fluxMappedResSet = ((Flux<String>)fluxRolesList.flatMap(role -> {
            long ibt = System.currentTimeMillis();
            Flux<String> ret = redisTemplate.opsForZSet().rangeByLex("r2ridx",
                    Range.of(Range.Bound.inclusive(role+"|"+app+"|"), Range.Bound.exclusive(role+"|"+app+"}")));
            long iet = System.currentTimeMillis();
            //logger.debug("Inner r2ridx query for {} cost: {}", role, (iet-ibt));
            return ret;
        })).flatMap(r2r -> {
            long ibt = System.currentTimeMillis();
            String newR2r =  r2r.substring(r2r.indexOf(ResourceNode.APP_SEP)+1);
            long iet = System.currentTimeMillis();
            //logger.debug("Inner process r2r cost: {}", (iet-ibt));
            return Mono.just(newR2r);
        }).distinct().publishOn(parallelScheduler);
        long et7 = System.currentTimeMillis();
        //logger.info("Outer get mappedRes cost: {}", (et7-bt7));

        long bt8 = System.currentTimeMillis();
        Mono<List<String>> monoRetList = fluxMappedResSet.flatMap(mappedRes -> {
            long ibt = System.currentTimeMillis();
            Flux<String> fluxSubTreeList = monoResourceNodeMap1.map(map -> {
                long ibt1 = System.currentTimeMillis();
                //logger.debug("to deal with mappedRes: {}", mappedRes);
                List<String> list = new ArrayList<String>();
                ResourceNode mappedResNode = map.get(mappedRes);
                if (null != mappedResNode) {
                    list.add(mappedResNode.getFqn());
                    List<ResourceNode> descendants = mappedResNode.getDescendants();
                    //logger.debug("descendants length: {}", descendants.size());
                    for (ResourceNode descendant : descendants) {
                        list.add(descendant.getFqn());
                    }
                }
                long iet1 = System.currentTimeMillis();
                //logger.debug("Inner get sub tree of {} cost: {}", mappedRes, (iet1-ibt1));
                return list;
            }).flatMapMany(Flux::fromIterable);
            long iet = System.currentTimeMillis();
            //logger.debug("Middle get sub tree of {} cost: {}", mappedRes, (iet-ibt));
            return fluxSubTreeList;
        }).distinct().collectList().publishOn(parallelScheduler);
        long et8 = System.currentTimeMillis();
        //logger.info("Outer generate return list cost: {}", (et8-bt8));

        long et = System.currentTimeMillis();
        logger.info("Total authorization cost: {}", (et-bt));
        return monoRetList;
    }
}
