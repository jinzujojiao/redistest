package org.example.kafka.producer.template;

import org.apache.kafka.common.PartitionInfo;
import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.UserRoleMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;

import java.util.List;

public abstract class AbstractKafkaMessageTemplate implements KafkaMessageTemplate{

    private static Logger logger = LoggerFactory.getLogger(AbstractKafkaMessageTemplate.class);

    protected KafkaTemplate<String, KafkaMessage> kafkaTemplate;

    static protected int size = -1;

    public AbstractKafkaMessageTemplate(KafkaTemplate<String, KafkaMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public ListenableFuture<SendResult<String, KafkaMessage>> send(KafkaMessage message) {
        if (!getSupportedDTO().isInstance(message)) {
            throw new ClassCastException("It should be "+getSupportedDTO());
        }
        return kafkaTemplate.send(getTopic(), getPartitionId(message), message.getKey(), message);
    }

    @Override
    public int getPartitionId(KafkaMessage message) {
        if (-1 == size) {
            List<PartitionInfo> partitions = kafkaTemplate.partitionsFor(getTopic());
            logger.info("partitions for user2role: "+partitions);
            size = partitions.size();
        }

        if (size <= 0) {
            String errMsg = "At least one partition should exist for topic: "+getTopic();
            logger.error(errMsg);
            throw new IllegalStateException(errMsg);
        }

        int hc = message.getKey().hashCode();
        // This is to prevent negative value of hashcode
        long newhc = Integer.toUnsignedLong(hc);
        return (int)(newhc % size);
    }
}
