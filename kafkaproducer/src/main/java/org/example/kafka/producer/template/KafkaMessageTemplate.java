package org.example.kafka.producer.template;

import org.example.kafka.common.dto.KafkaMessage;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;

public interface KafkaMessageTemplate {

    public String getTopic();

    public ListenableFuture<SendResult<String, KafkaMessage>> send(KafkaMessage message);

    public int getPartitionId(KafkaMessage message);

    public Class getSupportedDTO();
}
