package org.example.kafka.consumer;

import org.example.kafka.common.dto.AppRes;
import org.example.kafka.common.dto.UserRoleMapping;
import org.example.kafka.consumer.redis.command.IllegalCommandException;
import org.example.kafka.consumer.redis.command.MsgRedisCommand;
import org.example.kafka.consumer.redis.command.MsgRedisCommandFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.StringRedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.annotation.PartitionOffset;
import org.springframework.kafka.annotation.TopicPartition;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConsumerListener {

    private Logger logger = LoggerFactory.getLogger(ConsumerListener.class);

    @Autowired
    private RedisTemplate redisTemplate;

    // If test and test0 connect to the same partition, one of them will get message as they are in the same group
    @KafkaListener(id = "test",
            //topicPartitions = {@TopicPartition(topic = "user2role", partitions = { "0"}, partitionOffsets = @PartitionOffset(partition = "0", initialOffset = "0"))},
            topicPartitions =
                    { @TopicPartition(topic = "user2role",
                            /* partitions and partitionOffsets can not be used together only except partition is * in partitionOffsets */
                            //partitions = { "0", "1", "2" }, partitionOffsets = @PartitionOffset(partition = "*", initialOffset = "0", relativeToCurrent="true"))
                            partitionOffsets = @PartitionOffset(partition = "2", initialOffset = "0", relativeToCurrent="true"))
                    },
            //topics = "user2role",
            clientIdPrefix = "testClientId", groupId = "testgroup", containerFactory="kafkaManualListenerContainerFactory")
    public void userRoleListen(List<UserRoleMapping> data, Acknowledgment ack) {
        logger.info("userRoleListen Receive UserRoleMapping");
        /*logger.info("userRoleListen Receive UserRoleMapping: "+data);


        List results = redisTemplate.executePipelined(
                new RedisCallback<Object>() {
                    public Object doInRedis(RedisConnection connection) throws DataAccessException {
                        long bt = System.currentTimeMillis();
                        StringRedisConnection strConn = (StringRedisConnection)connection;
                        List<MsgRedisCommand> commands = new ArrayList<>();
                        for (UserRoleMapping userRoleMapping : data) {
                            commands.add(MsgRedisCommandFactory.getRedisCommand(userRoleMapping));
                        }
                        for (MsgRedisCommand command : commands) {

                            try {
                                command.appendCommandForPipeline(redisTemplate, strConn);
                            } catch (IllegalCommandException e) {
                                logger.error("Illegal command", e);
                                // add this message to an illegal message topic
                            }
                        }
                        return null;
                    }
                });
        logger.info("results of pipeline: "+results);*/
        ack.acknowledge();
    }

    /*@KafkaListener(id = "test0", topics = "user2role", clientIdPrefix = "testClientId0", groupId = "testgroup", containerFactory="kafkaListenerContainerFactory")
    public void userRoleListen0(UserRoleMapping data) {
        logger.info("userRoleListen0 Receive UserRoleMapping: "+data);
    }

    // test1 will get message as it is in a different group
    @KafkaListener(id = "test1", topics = "user2role", clientIdPrefix = "testClientId1", groupId = "testgroup1", containerFactory="kafkaListenerContainerFactory")
    public void userRoleListen1(UserRoleMapping data) {
        logger.info("userRoleListen1 Receive UserRoleMapping: "+data);
    }*/

    /*
    @KafkaListener(id = "appres", topics = "appres", clientIdPrefix = "appresClientId", groupId = "testgroup", containerFactory="kafkaManualListenerContainerFactory")
    public void appResListen(AppRes data, Acknowledgment ack) {
        logger.info("appResListen Receive AppRes: "+data);
        ack.acknowledge();
    }
    */
}
