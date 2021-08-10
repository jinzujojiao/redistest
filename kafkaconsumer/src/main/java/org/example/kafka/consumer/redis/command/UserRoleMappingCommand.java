package org.example.kafka.consumer.redis.command;

import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.UserRoleMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisZSetCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Set;

public class UserRoleMappingCommand extends AbstractMsgRedisCommand {

    private static Logger logger = LoggerFactory.getLogger(UserRoleMappingCommand.class);

    private UserRoleMapping userRoleMapping;

    public UserRoleMappingCommand(KafkaMessage message) {
        super(message);
        if (!(message instanceof UserRoleMapping)) {
            String errMsg = "Must be UserRoleMapping: "+message;
            logger.error(errMsg);
            throw new ClassCastException(errMsg);
        }
        userRoleMapping = (UserRoleMapping) message;
    }

    @Override
    protected void appendUpdateCommand(RedisConnection connection) {

    }

    @Override
    protected void appendDelCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException {
        String msgStr = this.getRedisStringWithoutTs();
        Set<String> results = redisTemplate.opsForZSet().rangeByLex(getIndexName(),
                RedisZSetCommands.Range.range().gte(msgStr+FIELD_SEP).lt(msgStr+'}'));
        if ((null == results) || (results.size()<=0)) {
            String errMsg = "No record in Redis: "+message;
            logger.error(errMsg);
            throw new IllegalCommandException(errMsg);
        }

        for (String record : results) {
            String[] fields = record.split("\\"+FIELD_SEP);
            if (fields.length >= 3) {
                long recordTs = Long.valueOf(fields[2]);
                if (recordTs >= message.getTimestamp()) {
                    String errMsg = "Record timestamp is newer than message: record="+record+", message="+message;
                    logger.error(errMsg);
                    throw new IllegalCommandException(errMsg);
                }
            }
        }

        int size = results.size();
        byte[][] toDelArray = new byte[size][];
        int i = 0;
        for (String record : results) {
            toDelArray[i] = record.getBytes(StandardCharsets.UTF_8);
            i++;
        }
        connection.zRem(getIndexName().getBytes(StandardCharsets.UTF_8), toDelArray);
    }

    @Override
    protected void appendAddCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException {
        String msgStr = this.getRedisStringWithoutTs();
        Set<String> results = redisTemplate.opsForZSet().rangeByLex(getIndexName(),
                RedisZSetCommands.Range.range().gte(msgStr+FIELD_SEP).lt(msgStr+'}'));
        if ((null != results) && (results.size()>0)) {
            String errMsg = "Already exists in Redis: "+results;
            logger.error(errMsg);
            throw new IllegalCommandException(errMsg);
        }
        connection.zAdd(getIndexName().getBytes(StandardCharsets.UTF_8), 0, getRedisString().getBytes(StandardCharsets.UTF_8));
    }

    @Override
    public String getIndexName() {
        return "kafkauser2roleidx";
    }

    @Override
    public String getRedisString() {
        return this.getRedisStringWithoutTs() + FIELD_SEP
                + userRoleMapping.getTimestamp();
    }

    @Override
    public String getRedisStringWithoutTs() {
        return userRoleMapping.getUser() + FIELD_SEP
                + userRoleMapping.getRole();
    }
}
