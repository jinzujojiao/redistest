package org.example.kafka.consumer;

import io.lettuce.core.ClientOptions;
import io.lettuce.core.ReadFrom;
import io.lettuce.core.resource.ClientResources;
import io.lettuce.core.tracing.BraveTracing;
import org.apache.commons.pool2.impl.GenericObjectPoolConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnection;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;

import static io.lettuce.core.ReadFrom.REPLICA_PREFERRED;

@Configuration
public class RedisConfig {
    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
                .master("mymaster")
                .sentinel("vm-lijjin-nprd-rcdn-1", 26379)
                .sentinel("vm-lijjin-nprd-alln-1", 26379)
                .sentinel("vm-lijjin-nprd-rtp-1", 26379);
        GenericObjectPoolConfig poolConfig = new GenericObjectPoolConfig();
        int poolSize = 8;
        String poolSizeStr = System.getenv("LETTUCE_POOL_SIZE");
        if (null != poolSizeStr) {
            poolSize = Integer.parseInt(poolSizeStr);
        }
        poolConfig.setMaxTotal(poolSize);

        int minIdle = 8;
        String minIdleSizeStr = System.getenv("LETTUCE_POOL_MINIDLE");
        if (null != minIdleSizeStr) {
            minIdle = Integer.parseInt(minIdleSizeStr);
        }
        poolConfig.setMinIdle(minIdle);

        int maxIdle = 8;
        String maxIdleSizeStr = System.getenv("LETTUCE_POOL_MAXIDLE");
        if (null != maxIdleSizeStr) {
            maxIdle = Integer.parseInt(maxIdleSizeStr);
        }
        poolConfig.setMaxIdle(maxIdle);

        brave.Tracing tracing = brave.Tracing.current();
        ReadFrom readFrom = ReadFrom.MASTER;
        String readRepStr = System.getenv("LETTUCE_READ_REPLICA");
        if (null != readRepStr) {
            boolean isReadRep = Boolean.parseBoolean(readRepStr);
            if (isReadRep) {
                readFrom = REPLICA_PREFERRED;
            }
        }
        LettucePoolingClientConfiguration lettucePoolConfig =
                LettucePoolingClientConfiguration.builder()
                        .poolConfig(poolConfig)
                        .clientOptions(ClientOptions.builder().build())
                        .clientResources(ClientResources.builder()
                                .tracing(BraveTracing.create(tracing)).build())
                        .readFrom(readFrom)
                        .build();
        LettuceConnectionFactory factory = new LettuceConnectionFactory(sentinelConfig, lettucePoolConfig);
        boolean isShareConn = false;
        String isShareConnStr = System.getenv("LETTUCE_SHARECONN");
        if (null != isShareConnStr) {
            isShareConn = Boolean.parseBoolean(isShareConnStr);
        }
        factory.setShareNativeConnection(isShareConn);
        factory.setPipeliningFlushPolicy(LettuceConnection.PipeliningFlushPolicy.flushOnClose());
        return factory;
    }

    @Bean
    public RedisTemplate redisTemplate() {
        RedisTemplate redisTemplate = new StringRedisTemplate();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        return redisTemplate;
    }
}
