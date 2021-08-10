package org.example.kafka.consumer.redis.command;

import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.KafkaMessage.Action;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public abstract class AbstractMsgRedisCommand implements MsgRedisCommand {

    private static Logger logger = LoggerFactory.getLogger(AbstractMsgRedisCommand.class);

    protected KafkaMessage message;

    public AbstractMsgRedisCommand(KafkaMessage message) {
        this.message = message;
    }

    @Override
    public void appendCommandForPipeline(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException {
        switch (message.getAction()) {
            case ADD:
                appendAddCommand(redisTemplate, connection);
                break;
            case DELETE:
                appendDelCommand(redisTemplate, connection);
                break;
            case UPDATE:
                appendUpdateCommand(connection);
                break;
            default:
                logger.error("Unknown KafkaMessage.Action for message "+message);
        }
    }

    protected abstract void appendUpdateCommand(RedisConnection connection);

    protected abstract void appendDelCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException;

    abstract protected void appendAddCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException;
}
