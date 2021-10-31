package org.example.kafka.consumer.redis.command;

import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.RoleResourceMapping;
import org.example.kafka.common.dto.UserRoleMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisZSetCommands;
import org.springframework.data.redis.core.RedisTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Set;

public class RoleResourceMappingCommand extends AbstractMsgRedisCommand {

    private static Logger logger = LoggerFactory.getLogger(RoleResourceMappingCommand.class);

    private RoleResourceMapping roleResourceMapping;

    private static final String[] INDEX_NAMES = new String[]{"kafkar2ridx", "kafkaapp2ridx"};

    public RoleResourceMappingCommand(KafkaMessage message) {
        super(message);
        if (!(message instanceof RoleResourceMapping)) {
            String errMsg = "Must be RoleResourceMapping: "+message;
            logger.error(errMsg);
            throw new ClassCastException(errMsg);
        }
        roleResourceMapping = (RoleResourceMapping) message;
    }

    @Override
    protected void appendUpdateCommand(RedisConnection connection) {

    }

    @Override
    protected void appendDelCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException {

    }

    @Override
    protected void appendAddCommand(RedisTemplate redisTemplate, RedisConnection connection) throws IllegalCommandException {
        String[] strWithoutTsArr = getRedisStringWithoutTsArr();
        String[] strArr = getRedisStringArr();
        for (int i=0; i<strWithoutTsArr.length; i++) {
            String msgStr = strWithoutTsArr[i];
            Set<String> results = redisTemplate.opsForZSet().rangeByLex(INDEX_NAMES[i],
                    RedisZSetCommands.Range.range().gte(msgStr+FIELD_SEP).lt(msgStr+'}'));
            if ((null != results) && (results.size()>0)) {
                String errMsg = "Already exists in Redis: "+results;
                logger.error(errMsg);
                throw new IllegalCommandException(errMsg);
            }
        }

        connection.multi();
        for (int i=0; i< strArr.length; i++) {
            logger.info("zadd {} to index {}", strArr[i], INDEX_NAMES[i]);
            connection.zAdd(INDEX_NAMES[i].getBytes(StandardCharsets.UTF_8), 0, strArr[i].getBytes(StandardCharsets.UTF_8));
        }
        connection.exec();
    }

    /**
     * Only the return the first index
     * @return
     */
    @Override
    public String getIndexName() {
        return INDEX_NAMES[0];
    }

    @Override
    public String getRedisString() {
        return this.getRedisStringArr()[0];
    }

    @Override
    public String getRedisStringWithoutTs() {
        return getRedisStringWithoutTsArr()[0];
    }

    private String[] getRedisStringArr() {
        String[] strWithoutTsArr = getRedisStringWithoutTsArr();
        for (int i=0; i<strWithoutTsArr.length; i++) {
            strWithoutTsArr[i] += FIELD_SEP + roleResourceMapping.getTimestamp();
        }
        return strWithoutTsArr;
    }

    private String[] getRedisStringWithoutTsArr() {
        String[] arr = new String[INDEX_NAMES.length];
        arr[0] = roleResourceMapping.getRole() + FIELD_SEP
                + roleResourceMapping.getApp() + FIELD_SEP
                + roleResourceMapping.getRes();
        arr[1] = roleResourceMapping.getApp() + FIELD_SEP
                + roleResourceMapping.getRole() + FIELD_SEP
                + roleResourceMapping.getRes();
        return arr;
    }
}
