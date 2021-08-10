package org.example.kafka.producer.template;

import org.example.kafka.common.dto.AppRes;
import org.example.kafka.common.dto.KafkaMessage;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;

public class AppResTemplate extends AbstractKafkaMessageTemplate {

    public AppResTemplate(KafkaTemplate<String, KafkaMessage> kafkaTemplate) {
        super(kafkaTemplate);
    }

    @Override
    public String getTopic() {
        return "appres";
    }

    @Override
    public Class getSupportedDTO() {
        return AppRes.class;
    }

}
