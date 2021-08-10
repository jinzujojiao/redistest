package org.example.kafka.consumer.redis.command;

import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisTemplate;

public interface MsgRedisCommand {
    public static final String FIELD_SEP = "|";

    public void appendCommandForPipeline(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException;

    public String getIndexName();

    public String getRedisString();

    public String getRedisStringWithoutTs();
}
