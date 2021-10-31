package org.example.kafka.consumer.redis.command;

import org.example.kafka.common.dto.AppRes;
import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.RoleResourceMapping;
import org.example.kafka.common.dto.UserRoleMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

public class MsgRedisCommandFactory {
    private static Logger logger = LoggerFactory.getLogger(MsgRedisCommandFactory.class);

    public static MsgRedisCommand getRedisCommand(KafkaMessage message) {
        MsgRedisCommand command = null;
        if (message instanceof UserRoleMapping) {
            command = new UserRoleMappingCommand(message);
        } else if (message instanceof AppRes) {

        } else if (message instanceof RoleResourceMapping) {
            command = new RoleResourceMappingCommand(message);
        } else {
            String errMsg = "Unknown message type: "+message;
            logger.error(errMsg);
            throw new ClassCastException(errMsg);
        }
        return command;
    }
}
