package org.example.redistest.webtest;

import io.lettuce.core.Range;
import io.lettuce.core.RedisFuture;
import io.lettuce.core.cluster.api.async.RedisClusterAsyncCommands;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisZSetCommands;
import org.springframework.data.redis.connection.StringRedisConnection;
import org.springframework.data.redis.connection.lettuce.LettuceConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisConnectionUtils;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.*;
import java.util.function.BiFunction;
import java.util.function.Function;

@RestController
@RequestMapping("/test")
public class RedisTestService {

    private Logger logger = LoggerFactory.getLogger(RedisTestService.class);

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private Executor cachedThreadPool;

    private static Random random = new Random();

    private LettuceConnection getLettuceConnection() {
        RedisConnectionFactory connectionFactory = redisTemplate.getConnectionFactory();
        LettuceConnection connection = null;
        try {
            connection = (LettuceConnection) RedisConnectionUtils.getConnection(connectionFactory);
        } catch (Exception e) {
            logger.error("Catch Exception", e);
        }
        return connection;
    }

    private void releaseLettuceConnection(LettuceConnection connection) {
        if (null != connection) {
            RedisConnectionUtils.releaseConnection(connection,redisTemplate.getConnectionFactory());
        }
    }

    @GetMapping("/authorize/{user}")
    public Set<String> authorize(@PathVariable("user")String user, @RequestParam String app) {
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        Set<String> ret = new HashSet<>();
        LettuceConnection conn = null;

        try {
            LettuceConnection connection = getLettuceConnection();
            conn = connection;
            if (null != connection) {

                RedisClusterAsyncCommands<byte[], byte[]> commands = connection.getNativeConnection();
                commands.setAutoFlushCommands(false);
                List<RedisFuture<List<byte[]>>> futures = new ArrayList<RedisFuture<List<byte[]>>>();
                futures.add(commands.zrangebylex("appidx".getBytes(),
                        Range.from(Range.Boundary.including((app + "|").getBytes()),
                                Range.Boundary.excluding((app + "}").getBytes()))));
                futures.add(commands.zrangebylex("kafkauser2roleidx".getBytes(),
                        Range.from(Range.Boundary.including((user + "|").getBytes()),
                                Range.Boundary.excluding((user + "}").getBytes()))));

                // write all commands to the transport layer
                commands.flushCommands();

                CompletionStage<Map<String, ResourceNode>> resourceNodeMap = futures.get(0).thenApplyAsync(
                        new Function<List<byte[]>, Map<String, ResourceNode>>() {

                            @Override
                            public Map<String, ResourceNode> apply(List<byte[]> bytes) {
                                Map<String, ResourceNode> resourceNodeMap = new HashMap<>();
                                for (byte[] appResBytes : bytes) {
                                    String appRes = new String(appResBytes);
                                    int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
                                    if (-1 == pos) {
                                        pos = appRes.indexOf(ResourceNode.APP_SEP);
                                    }
                                    String name = appRes.substring(pos + 1);
                                    String parentFqn = appRes.substring(0, pos);
                                    ResourceNode resourceNode = new ResourceNode(name, parentFqn);
                                    resourceNodeMap.put(appRes, resourceNode);
                                    ResourceNode parentNode = resourceNodeMap.get(parentFqn);
                                    if (null != parentNode) {
                                        parentNode.addChild(resourceNode);
                                    } else {
                                        //logger.warn("No parent for " + resourceNode.getFqn());
                                    }
                                }
                                if (resourceNodeMap.size() != 781) {
                                    logger.error("Wrong resourceNodeMap: {}", resourceNodeMap);
                                }
                                return resourceNodeMap;
                            }
                        }, cachedThreadPool
                );

                CompletionStage<Set<String>> mappedResSet = futures.get(1).thenApplyAsync(
                        new Function<List<byte[]>, Set<String>>() {
                            @Override
                            public Set<String> apply(List<byte[]> bytes) {
                                List<String> roles = new ArrayList<String>();
                                for (byte[] u2rBytes : bytes) {
                                    String u2r = new String(u2rBytes);
                                    roles.add(u2r.split("\\|")[1]);
                                }
                                RedisClusterAsyncCommands<byte[], byte[]> commands = connection.getNativeConnection();
                                commands.setAutoFlushCommands(false);
                                List<RedisFuture<List<byte[]>>> futures = new ArrayList<RedisFuture<List<byte[]>>>();
                                for (String role : roles) {
                                    futures.add(commands.zrangebylex("r2ridx".getBytes(),
                                            Range.from(Range.Boundary.including((role + "|" + app + "|").getBytes()),
                                                    Range.Boundary.excluding((role + "|" + app + "}").getBytes()))));
                                }

                                // write all commands to the transport layer
                                commands.flushCommands();

                                List<CompletableFuture<Set<String>>> completableFutures = new ArrayList<>();
                                Set<String> mappedResSet = new HashSet<>();
                                for (RedisFuture<List<byte[]>> future : futures) {
                                    CompletionStage<Set<String>> oneMappedResSet = future.thenApplyAsync(new Function<List<byte[]>, Set<String>>() {
                                        @Override
                                        public Set<String> apply(List<byte[]> bytes) {
                                            Set<String> oneMappedResSet = new HashSet<>();
                                            for (byte[] r2rBytes : bytes) {
                                                String r2r = new String(r2rBytes);
                                                String mappedRes = r2r.substring(r2r.indexOf(ResourceNode.APP_SEP) + 1);
                                                oneMappedResSet.add(mappedRes);
                                            }
                                            return oneMappedResSet;
                                        }
                                    }, cachedThreadPool);
                                    completableFutures.add(oneMappedResSet.toCompletableFuture());
                                }

                                completableFutures.forEach(CompletableFuture::join);
                                //LettuceFutures.awaitAll(10, TimeUnit.SECONDS, futures.toArray(new RedisFuture[futures.size()]));
                                for (CompletableFuture<Set<String>> completableFuture : completableFutures) {
                                    try {
                                        mappedResSet.addAll(completableFuture.get());
                                    } catch (Exception e) {
                                        logger.error("Fail to add future result to mappedResSet", e);
                                    }
                                }
                                /*if (mappedResSet.size() != 4) {
                                    logger.error("Wrong mappedResSet: {}", mappedResSet);
                                }*/
                                return mappedResSet;
                            }
                        }, cachedThreadPool
                );

                CompletionStage<Set<String>> resSet = mappedResSet.thenCombineAsync(resourceNodeMap,
                        new BiFunction<Set<String>, Map<String, ResourceNode>, Set<String>>() {
                            @Override
                            public Set<String> apply(Set<String> mappedResSet, Map<String, ResourceNode> resourceNodeMap) {
                                Set<String> resSet = new HashSet<>();
                                for (String mappedRes : mappedResSet) {
                                    ResourceNode resourceNode = resourceNodeMap.get(mappedRes);
                                    if (null != resourceNode) {
                                        resSet.add(mappedRes);
                                        List<ResourceNode> descendants = resourceNode.getDescendants();
                                        for (ResourceNode descendant : descendants) {
                                            resSet.add(descendant.getFqn());
                                        }
                                    }
                                }
                                /*if (resSet.size() != 194) {
                                    logger.error("Wrong, mappedResSet: {}, resourceNodeMap: {}, resSet: {}", mappedResSet, resourceNodeMap, resSet);
                                }*/
                                return resSet;
                            }
                        }, cachedThreadPool);

                try {
                    ret = resSet.toCompletableFuture().get();
                } catch (Exception e) {
                    logger.error("Catch error", e);
                }
                logger.debug("we are here");
            } else {
                logger.error("Fail to get connection");
            }
        } finally {
            releaseLettuceConnection(conn);
        }

        /*if (ret.size() != 194) {
            logger.error("Fail to process, ret: {}", ret);
        }*/
        long et = System.currentTimeMillis();
        logger.info("Authz user {} with app {} cost {} ms", user, app, et-bt);
        return ret;

    }

    @GetMapping("/authorize0/{user}")
    public Set<String> authorize0(@PathVariable("user")String user, @RequestParam String app) {
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
                        //logger.info(seq+" app+u2r internal cost "+(et-bt));
                        return null;
                    }
                });
        long et11 = System.currentTimeMillis();
        //logger.info(seq+" xxxxx+app+u2r cost "+(et11-bt1));
        Set<String> appResSet = new TreeSet<String>();
        Set<String> u2rSet = new HashSet<String>();
        if ((null != results1) && (results1.size()>=2)) {
            appResSet.addAll(results1.get(0));
            u2rSet.addAll(results1.get(1));
        }
        long et1 = System.currentTimeMillis();
        //logger.info(seq+" app+u2r cost "+(et1-bt1));
        //logger.debug("appResSet="+appResSet);
        //logger.debug("u2rSet="+u2rSet);

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
                //logger.warn("No parent for "+resourceNode.getFqn());
            }
        }
        Set<Map.Entry<String, ResourceNode>> entrySet = resourceNodeMap.entrySet();
        for (Map.Entry<String, ResourceNode> entry : entrySet) {
            ResourceNode node = entry.getValue();
            String parentFqn = node.getParentFqn();
            if (null != parentFqn) {
                ResourceNode parentNode = resourceNodeMap.get(parentFqn);
                if (null != parentNode) {
                    parentNode.addChild(node);
                }
            }
        }

        List<String> roles = new ArrayList<String>();
        for (String u2r : u2rSet) {
            roles.add(u2r.split("\\|")[1]);
        }
        //logger.debug("roles="+roles);

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
                        //logger.info(seq+" r2r internal cost "+(et-bt));
                        return null;
                    }
                });

        long et21 = System.currentTimeMillis();
        //logger.info(seq+" xxxxx+r2r cost "+(et21-bt2));

        Set<String> r2rSet = new HashSet<String>();
        if (null != results2) {
            for (Set<String> r2r : results2) {
                r2rSet.addAll(r2r);
            }
        }
        long et2 = System.currentTimeMillis();
        //logger.info(seq+" r2r cost "+(et2-bt2));
        //logger.debug("r2rSet="+r2rSet);

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
        //logger.info(seq+" authorize cost "+(et-bt));
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

    @GetMapping("/authorize4/{user}")
    public Set<String> authorize4(@PathVariable("user")String user, @RequestParam String app) {
        logger.debug("start authorize4");
        long seq = random.nextLong();
        long bt = System.currentTimeMillis();
        long bt1 = bt;
        Set<String> ret = new HashSet<>();
        LettuceConnection conn = null;

        try {
            LettuceConnection connection = getLettuceConnection();
            conn = connection;
            if (null != connection) {

                RedisClusterAsyncCommands<byte[], byte[]> commands = connection.getNativeConnection();
                commands.setAutoFlushCommands(false);
                List<RedisFuture<List<byte[]>>> futures = new ArrayList<RedisFuture<List<byte[]>>>();
                futures.add(commands.zrangebylex("appidx".getBytes(),
                        Range.from(Range.Boundary.including((app + "|").getBytes()),
                                Range.Boundary.excluding((app + "}").getBytes()))));
                futures.add(commands.zrangebylex("kafkauser2roleidx".getBytes(),
                        Range.from(Range.Boundary.including((user + "|").getBytes()),
                                Range.Boundary.excluding((user + "}").getBytes()))));
                futures.add(commands.zrangebylex("app2ridx".getBytes(),
                        Range.from(Range.Boundary.including((app + "|").getBytes()),
                                Range.Boundary.excluding((app + "}").getBytes()))));

                // write all commands to the transport layer
                commands.flushCommands();

                CompletionStage<Map<String, ResourceNode>> resourceNodeMap = futures.get(0).thenApplyAsync(
                        new Function<List<byte[]>, Map<String, ResourceNode>>() {

                            @Override
                            public Map<String, ResourceNode> apply(List<byte[]> bytes) {
                                logger.debug("start futures0 apply");
                                Map<String, ResourceNode> resourceNodeMap = new HashMap<>();
                                for (byte[] appResBytes : bytes) {
                                    String appRes = new String(appResBytes);
                                    int pos = appRes.lastIndexOf(ResourceNode.RES_SEP);
                                    if (-1 == pos) {
                                        pos = appRes.indexOf(ResourceNode.APP_SEP);
                                    }
                                    String name = appRes.substring(pos + 1);
                                    String parentFqn = appRes.substring(0, pos);
                                    ResourceNode resourceNode = new ResourceNode(name, parentFqn);
                                    resourceNodeMap.put(appRes, resourceNode);
                                    ResourceNode parentNode = resourceNodeMap.get(parentFqn);
                                    if (null != parentNode) {
                                        parentNode.addChild(resourceNode);
                                    } else {
                                        //logger.warn("No parent for " + resourceNode.getFqn());
                                    }
                                }
                                if (resourceNodeMap.size() != 781) {
                                    logger.error("Wrong resourceNodeMap: {}", resourceNodeMap);
                                }
                                return resourceNodeMap;
                            }
                        }, cachedThreadPool
                );

                CompletionStage<Set<String>> userRoleSet = futures.get(1).thenApplyAsync(
                        new Function<List<byte[]>, Set<String>>() {

                            @Override
                            public Set<String> apply(List<byte[]> bytes) {
                                logger.debug("start futures1 apply");
                                Set<String> roles = new HashSet<String>();
                                for (byte[] u2rBytes : bytes) {
                                    String u2r = new String(u2rBytes);
                                    roles.add(u2r.split("\\|")[1]);
                                }
                                return roles;
                            }
                        }, cachedThreadPool
                );

                CompletionStage<Map<String, Set<String>>> r2rMap = futures.get(2).thenApplyAsync(
                        new Function<List<byte[]>, Map<String, Set<String>>>() {

                            @Override
                            public Map<String, Set<String>> apply(List<byte[]> bytes) {
                                logger.debug("start futures2 apply");
                                Map<String, Set<String>> r2rMap = new HashMap<>();
                                for (byte[] app2rBytes : bytes) {
                                    String app2r = new String(app2rBytes);
                                    String[] arr = app2r.split("\\|");
                                    if (3 == arr.length) {
                                        String roleName = arr[1];
                                        String res = arr[2];
                                        Set<String> resSet = r2rMap.get(roleName);
                                        if (null == resSet) {
                                            resSet = new HashSet<String>();
                                            r2rMap.put(roleName, resSet);
                                        }
                                        resSet.add(arr[0]+'|'+res);
                                    }
                                }
                                return r2rMap;
                            }
                        }, cachedThreadPool
                );

                CompletionStage<Set<String>> mappedResSet = userRoleSet.thenCombine(r2rMap,
                        new BiFunction<Set<String>, Map<String, Set<String>>, Set<String>>() {
                            @Override
                            public Set<String> apply(Set<String> user2RoleSet, Map<String, Set<String>> r2rMap) {
                                logger.debug("start userrole r2r combine");
                                Set<String> mappedResSet = new HashSet<>();
                                for (String role : user2RoleSet) {
                                    Set<String> resSet = r2rMap.get(role);
                                    if (null != resSet) {
                                        mappedResSet.addAll(resSet);
                                    }
                                }
                                return mappedResSet;
                            }
                        }

                );

                CompletionStage<Set<String>> resSet = mappedResSet.thenCombine(resourceNodeMap,
                        new BiFunction<Set<String>, Map<String, ResourceNode>, Set<String>>() {
                            @Override
                            public Set<String> apply(Set<String> mappedResSet, Map<String, ResourceNode> resourceNodeMap) {
                                logger.debug("start mappedres resourcenodemap combine");
                                Set<String> resSet = new HashSet<>();

                                for (String mappedRes : mappedResSet) {
                                    ResourceNode resourceNode = resourceNodeMap.get(mappedRes);
                                    if (null != resourceNode) {
                                        resSet.add(mappedRes);
                                        List<ResourceNode> descendants = resourceNode.getDescendants();
                                        for (ResourceNode descendant : descendants) {
                                            resSet.add(descendant.getFqn());
                                        }
                                    }
                                }

                                return resSet;
                            }
                        });
                try {
                    ret = resSet.toCompletableFuture().get();
                } catch (Exception e) {
                    logger.error("Catch error", e);
                }
                logger.debug("we are here");
            } else {
                logger.error("Fail to get connection");
            }
        } finally {
            releaseLettuceConnection(conn);
        }

        /*if (ret.size() != 194) {
            logger.error("Fail to process, ret: {}", ret);
        }*/
        long et = System.currentTimeMillis();
        logger.info("Authz user {} with app {} cost {} ms", user, app, et-bt);
        return ret;

    }
}
