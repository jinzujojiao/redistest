package org.example.redistest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisZSetCommands;
import org.springframework.data.redis.connection.StringRedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/test")
public class RedisTestService {

    private Logger logger = LoggerFactory.getLogger(RedisTestService.class);

    @Autowired
    private RedisTemplate redisTemplate;

    private static Random random = new Random();

    @GetMapping("/authorize/{user}")
    public Set<String> authorize(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        List<Set<String>> results1 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        strConn.zRangeByLex("appidx",
                                new RedisZSetCommands.Range().gte(app+"|").lt(app+"}"));
                        strConn.zRangeByLex("user2roleidx",
                                new RedisZSetCommands.Range().gte(user+"|").lt(user+"}"));
                        long et = System.currentTimeMillis();
                        logger.info(seq+" app+u2r internal cost "+(et-bt));
                        return null;
                    }
                });
        long et11 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+app+u2r cost "+(et11-bt1));
        Set<String> appResSet = new TreeSet<String>();
        Set<String> u2rSet = new HashSet<String>();
        if ((null != results1) && (results1.size()>=2)) {
            appResSet.addAll(results1.get(0));
            u2rSet.addAll(results1.get(1));
        }
        long et1 = System.currentTimeMillis();
        logger.info(seq+" app+u2r cost "+(et1-bt1));
        logger.debug("appResSet="+appResSet);
        logger.debug("u2rSet="+u2rSet);

        Map<String, ResourceNode> resourceNodeMap =
                new HashMap<String, ResourceNode>();
        for (String appRes : appResSet) {
            int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
            if (-1 == pos) {
                pos = appRes.indexOf(ResourceNode.APP_SEP);
            }
            String name = appRes.substring(pos+1);
            String parentFqn = appRes.substring(0, pos);
            ResourceNode resourceNode = new ResourceNode(name, parentFqn);
            resourceNodeMap.put(appRes, resourceNode);
            ResourceNode parentNode = resourceNodeMap.get(parentFqn);
            if (null != parentNode) {
                parentNode.addChild(resourceNode);
            } else {
                logger.warn("No parent for "+resourceNode.getFqn());
            }
        }
        /*Set<Map.Entry<String, ResourceNode>> entrySet = resourceNodeMap.entrySet();
        for (Map.Entry<String, ResourceNode> entry : entrySet) {
            ResourceNode node = entry.getValue();
            String parentFqn = node.getParentFqn();
            if (null != parentFqn) {
                ResourceNode parentNode = resourceNodeMap.get(parentFqn);
                if (null != parentNode) {
                    parentNode.addChild(node);
                }
            }
        }*/

        List<String> roles = new ArrayList<String>();
        for (String u2r : u2rSet) {
            roles.add(u2r.split("\\|")[1]);
        }
        logger.debug("roles="+roles);

        long bt2 = System.currentTimeMillis();
        List<Set<String>> results2 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        for (String role: roles) {
                            strConn.zRangeByLex("r2ridx",
                                    new RedisZSetCommands.Range().gte(role+"|"+app+"|").lt(role+"|"+app+"}"));
                        }
                        long et = System.currentTimeMillis();
                        logger.info(seq+" r2r internal cost "+(et-bt));
                        return null;
                    }
                });

        long et21 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+r2r cost "+(et21-bt2));

        Set<String> r2rSet = new HashSet<String>();
        if (null != results2) {
            for (Set<String> r2r : results2) {
                r2rSet.addAll(r2r);
            }
        }
        long et2 = System.currentTimeMillis();
        logger.info(seq+" r2r cost "+(et2-bt2));
        logger.debug("r2rSet="+r2rSet);

        Set<ResourceNode> resultSet = new HashSet<ResourceNode>();
        for (String r2r : r2rSet) {
            String mappedRes = r2r.substring(r2r.indexOf(ResourceNode.APP_SEP)+1);
            ResourceNode mappedResNode = resourceNodeMap.get(mappedRes);
            if (null != mappedResNode) {
                resultSet.add(mappedResNode);
                resultSet.addAll(mappedResNode.getDescendants());
            }
        }

        Set<String> results = new HashSet<String>();
        for (ResourceNode node : resultSet) {
            results.add(node.getFqn());
        }

        /*results.clear();
        int i=0;
        for (ResourceNode node : resultSet) {
            if (i < 5) {
                results.add(node.getFqn());
                i++;
            } else {
                break;
            }
        }*/

        long et = System.currentTimeMillis();
        logger.info(seq+" authorize cost "+(et-bt));
        return results;
    }

    @GetMapping("/authorize1/{user}")
    public Set<String> authorize1(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        List<Set<String>> results1 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        strConn.zRangeByScore("app_"+app, 0, 0);
                        strConn.zRangeByScore("u2r_"+user, 0, 0);
                        long et = System.currentTimeMillis();
                        logger.info(seq+" app+u2r internal cost "+(et-bt));
                        return null;
                    }
                });
        long et11 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+app+u2r cost "+(et11-bt1));
        Set<String> appResSet = new HashSet<String>();
        Set<String> u2rSet = new HashSet<String>();
        if ((null != results1) && (results1.size()>=2)) {
            appResSet.addAll(results1.get(0));
            u2rSet.addAll(results1.get(1));
        }
        long et1 = System.currentTimeMillis();
        logger.info(seq+" app+u2r cost "+(et1-bt1));
        logger.debug("appResSet="+appResSet);
        logger.debug("u2rSet="+u2rSet);

        Map<String, ResourceNode> resourceNodeMap =
                new HashMap<String, ResourceNode>();
        for (String appRes : appResSet) {
            String parentFqn = app;
            String name = appRes;
            int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
            if (pos > -1) {
                parentFqn += ResourceNode.APP_SEP + appRes.substring(0, pos);
                name = appRes.substring(pos+1);
            }
            ResourceNode resourceNode = new ResourceNode(name, parentFqn);
            resourceNodeMap.put(appRes, resourceNode);
        }

        List<String> roles = new ArrayList<String>();
        roles.addAll(u2rSet);
        logger.debug("roles="+roles);

        long bt2 = System.currentTimeMillis();
        List<Set<String>> results2 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        for (String role: roles) {
                            strConn.zRangeByLex("r2r_"+role,
                                    new RedisZSetCommands.Range().gte(app+"|").lt(app+"}"));
                        }
                        long et = System.currentTimeMillis();
                        logger.info(seq+" r2r internal cost "+(et-bt));
                        return null;
                    }
                });

        long et21 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+r2r cost "+(et21-bt2));

        Set<String> r2rSet = new HashSet<String>();
        if (null != results2) {
            for (Set<String> r2r : results2) {
                r2rSet.addAll(r2r);
            }
        }
        long et2 = System.currentTimeMillis();
        logger.info(seq+" r2r cost "+(et2-bt2));
        logger.debug("r2rSet="+r2rSet);

        Set<ResourceNode> resultSet = new HashSet<ResourceNode>();
        for (String r2r : r2rSet) {
            String mappedRes = r2r.substring(r2r.indexOf(ResourceNode.APP_SEP)+1);
            ResourceNode mappedResNode = resourceNodeMap.get(mappedRes);
            if (null != mappedResNode) {
                resultSet.add(mappedResNode);
                resultSet.addAll(mappedResNode.getDescendants());
            }
        }

        Set<String> results = new HashSet<String>();
        for (ResourceNode node : resultSet) {
            results.add(node.getFqn());
        }

        long et = System.currentTimeMillis();
        logger.info(seq+" authorize cost "+(et-bt));
        return results;
    }

    @GetMapping("/authorize2/{user}")
    public Set<String> authorize2(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        List<Set<String>> results1 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        strConn.zRangeByScore("app_"+app, 0, 0);
                        strConn.zRangeByScore("u2r_"+user, 0, 0);
                        long et = System.currentTimeMillis();
                        logger.info(seq+" app+u2r internal cost "+(et-bt));
                        return null;
                    }
                });
        long et11 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+app+u2r cost "+(et11-bt1));
        Set<String> appResSet = new HashSet<String>();
        Set<String> u2rSet = new HashSet<String>();
        if ((null != results1) && (results1.size()>=2)) {
            appResSet.addAll(results1.get(0));
            u2rSet.addAll(results1.get(1));
        }
        long et1 = System.currentTimeMillis();
        logger.info(seq+" app+u2r cost "+(et1-bt1));
        logger.debug("appResSet="+appResSet);
        logger.debug("u2rSet="+u2rSet);

        Map<String, ResourceNode> resourceNodeMap =
                new HashMap<String, ResourceNode>();
        for (String appRes : appResSet) {
            String parentFqn = app;
            String name = appRes;
            int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
            if (pos > -1) {
                parentFqn += ResourceNode.APP_SEP + appRes.substring(0, pos);
                name = appRes.substring(pos+1);
            }
            ResourceNode resourceNode = new ResourceNode(name, parentFqn);
            resourceNodeMap.put(appRes, resourceNode);
        }
        logger.debug("resourceNodeMap="+resourceNodeMap);

        List<String> roles = new ArrayList<String>();
        roles.addAll(u2rSet);
        logger.debug("roles="+roles);

        long bt2 = System.currentTimeMillis();
        List<Set<String>> results2 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        for (String role: roles) {
                            strConn.zRangeByScore("r2r_"+role+"_"+app, 0, 0);
                        }
                        long et = System.currentTimeMillis();
                        logger.info(seq+" r2r internal cost "+(et-bt));
                        return null;
                    }
                });

        long et21 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+r2r cost "+(et21-bt2));

        Set<String> r2rSet = new HashSet<String>();
        if (null != results2) {
            for (Set<String> r2r : results2) {
                r2rSet.addAll(r2r);
            }
        }
        long et2 = System.currentTimeMillis();
        logger.info(seq+" r2r cost "+(et2-bt2));
        logger.debug("r2rSet="+r2rSet);

        Set<ResourceNode> resultSet = new HashSet<ResourceNode>();
        for (String r2r : r2rSet) {
            ResourceNode mappedResNode = resourceNodeMap.get(r2r);
            if (null != mappedResNode) {
                resultSet.add(mappedResNode);
                resultSet.addAll(mappedResNode.getDescendants());
            }
        }

        Set<String> results = new HashSet<String>();
        for (ResourceNode node : resultSet) {
            results.add(node.getFqn());
        }

        long et = System.currentTimeMillis();
        logger.info(seq+" authorize cost "+(et-bt));
        return results;
    }

    @GetMapping("/authorize3/{user}")
    public Set<String> authorize3(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        List<Set<String>> results1 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        strConn.sMembers("set_app_"+app);
                        strConn.sMembers("set_u2r_"+user);
                        long et = System.currentTimeMillis();
                        logger.info(seq+" app+u2r internal cost "+(et-bt));
                        return null;
                    }
                });
        long et11 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+app+u2r cost "+(et11-bt1));
        Set<String> appResSet = new HashSet<String>();
        Set<String> u2rSet = new HashSet<String>();
        if ((null != results1) && (results1.size()>=2)) {
            appResSet.addAll(results1.get(0));
            u2rSet.addAll(results1.get(1));
        }
        long et1 = System.currentTimeMillis();
        logger.info(seq+" app+u2r cost "+(et1-bt1));
        logger.debug("appResSet="+appResSet);
        logger.debug("u2rSet="+u2rSet);

        Map<String, ResourceNode> resourceNodeMap =
                new HashMap<String, ResourceNode>();
        for (String appRes : appResSet) {
            String parentFqn = app;
            String name = appRes;
            int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
            if (pos > -1) {
                parentFqn += ResourceNode.APP_SEP + appRes.substring(0, pos);
                name = appRes.substring(pos+1);
            }
            ResourceNode resourceNode = new ResourceNode(name, parentFqn);
            resourceNodeMap.put(appRes, resourceNode);
        }
        logger.debug("resourceNodeMap="+resourceNodeMap);

        List<String> roles = new ArrayList<String>();
        roles.addAll(u2rSet);
        logger.debug("roles="+roles);

        long bt2 = System.currentTimeMillis();
        List<Set<String>> results2 = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        for (String role: roles) {
                            strConn.sMembers("set_r2r_"+role+"_"+app);
                        }
                        long et = System.currentTimeMillis();
                        logger.info(seq+" r2r internal cost "+(et-bt));
                        return null;
                    }
                });

        long et21 = System.currentTimeMillis();
        logger.info(seq+" xxxxx+r2r cost "+(et21-bt2));

        Set<String> r2rSet = new HashSet<String>();
        if (null != results2) {
            for (Set<String> r2r : results2) {
                r2rSet.addAll(r2r);
            }
        }
        long et2 = System.currentTimeMillis();
        logger.info(seq+" r2r cost "+(et2-bt2));
        logger.debug("r2rSet="+r2rSet);

        Set<ResourceNode> resultSet = new HashSet<ResourceNode>();
        for (String r2r : r2rSet) {
            ResourceNode mappedResNode = resourceNodeMap.get(r2r);
            if (null != mappedResNode) {
                resultSet.add(mappedResNode);
                resultSet.addAll(mappedResNode.getDescendants());
            }
        }

        Set<String> results = new HashSet<String>();
        for (ResourceNode node : resultSet) {
            results.add(node.getFqn());
        }

        long et = System.currentTimeMillis();
        logger.info(seq+" authorize cost "+(et-bt));
        return results;
    }
}
