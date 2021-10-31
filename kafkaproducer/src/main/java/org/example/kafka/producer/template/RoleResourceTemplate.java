package org.example.kafka.producer.template;

import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.RoleResourceMapping;
import org.springframework.kafka.core.KafkaTemplate;

public class RoleResourceTemplate extends AbstractKafkaMessageTemplate {

    public RoleResourceTemplate(KafkaTemplate<String, KafkaMessage> kafkaTemplate) {
        super(kafkaTemplate);
    }

    @Override
    public String getTopic() {
        return "r2r";
    }

    @Override
    public Class getSupportedDTO() {
        return RoleResourceMapping.class;
    }
}
