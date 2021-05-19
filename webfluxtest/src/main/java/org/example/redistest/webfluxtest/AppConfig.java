package org.example.redistest.webfluxtest;

import io.lettuce.core.ClientOptions;
import io.lettuce.core.ReadFrom;
import io.lettuce.core.resource.ClientResources;
import io.lettuce.core.resource.DefaultEventLoopGroupProvider;
import io.lettuce.core.support.BoundedPoolConfig;
import io.lettuce.core.tracing.BraveTracing;
import io.netty.util.concurrent.DefaultEventExecutorGroup;
import org.apache.commons.pool2.impl.GenericObjectPoolConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.ReactiveRedisConnectionFactory;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.core.ReactiveStringRedisTemplate;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

import static io.lettuce.core.ReadFrom.REPLICA_PREFERRED;

@Configuration
public class AppConfig {
    @Bean
    @Primary
    public ReactiveRedisConnectionFactory lettuceConnectionFactory() {
        RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
                .master("mymaster")
                .sentinel("vm-lijjin-nprd-rcdn-1", 26379)
                .sentinel("vm-lijjin-nprd-alln-1", 26379)
                .sentinel("vm-lijjin-nprd-rtp-1", 26379);
        int poolSize = 8;
        String poolSizeStr = System.getenv("LETTUCE_POOL_SIZE");
        if (null != poolSizeStr) {
            poolSize = Integer.parseInt(poolSizeStr);
        }

        int minIdle = 8;
        String minIdleSizeStr = System.getenv("LETTUCE_POOL_MINIDLE");
        if (null != minIdleSizeStr) {
            minIdle = Integer.parseInt(minIdleSizeStr);
        }

        int maxIdle = 8;
        String maxIdleSizeStr = System.getenv("LETTUCE_POOL_MAXIDLE");
        if (null != maxIdleSizeStr) {
            maxIdle = Integer.parseInt(maxIdleSizeStr);
        }

        BoundedPoolConfig poolConfig = BoundedPoolConfig.builder().maxTotal(poolSize).maxIdle(maxIdle).minIdle(minIdle).build();

        brave.Tracing tracing = brave.Tracing.current();
        //BraveTracing braveTracing = BraveTracing.builder().build();
        ReadFrom readFrom = ReadFrom.MASTER;
        String readRepStr = System.getenv("LETTUCE_READ_REPLICA");
        if (null != readRepStr) {
            boolean isReadRep = Boolean.parseBoolean(readRepStr);
            if (isReadRep) {
                readFrom = REPLICA_PREFERRED;
            }
        }

        LettuceClientConfiguration lettuceConfig =
                LettuceClientConfiguration.builder()
                        .clientOptions(ClientOptions.builder().build())
                        .clientResources(ClientResources.builder()
                                .eventLoopGroupProvider(new DefaultEventLoopGroupProvider(7))
                                .eventExecutorGroup(new DefaultEventExecutorGroup(4))
                                .computationThreadPoolSize(5)
                                .ioThreadPoolSize(6).build())
                                /*.tracing(braveTracing).build())*/
                        .readFrom(readFrom)
                        .build();
        LettuceConnectionFactory factory = new LettuceConnectionFactory(sentinelConfig, lettuceConfig);
        boolean isShareConn = false;
        String isShareConnStr = System.getenv("LETTUCE_SHARECONN");
        if (null != isShareConnStr) {
            isShareConn = Boolean.parseBoolean(isShareConnStr);
        }
        factory.setShareNativeConnection(isShareConn);
        return factory;
    }

    @Bean
    public ReactiveRedisTemplate reactiveRedisTemplate(ReactiveRedisConnectionFactory factory) {
        return new ReactiveStringRedisTemplate(factory);
    }

    @Bean
    public Scheduler parallelScheduler() {
        return Schedulers.newParallel("testparallel", 8, true);
    }
}
