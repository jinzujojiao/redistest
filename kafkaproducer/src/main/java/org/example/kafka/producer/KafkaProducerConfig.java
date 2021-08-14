package org.example.kafka.producer;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.producer.template.AppResTemplate;
import org.example.kafka.producer.template.UserRoleTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaProducerConfig {
    
    @Bean
    public ProducerFactory<String, KafkaMessage> producerFactory() {
        return new DefaultKafkaProducerFactory<>(producerConfigs());
    }

    @Bean
    public Map<String, Object> producerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "vm-lijjin-nprd-rcdn-kafka1:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        //props.put(ProducerConfig.BATCH_SIZE_CONFIG, 0);
        //props.put(ProducerConfig.RETRIES_CONFIG, 10);
        // See https://kafka.apache.org/documentation/#producerconfigs for more properties
        return props;
    }

    @Bean
    public KafkaTemplate<String, KafkaMessage> kafkaTemplate() {
        return new KafkaTemplate<String, KafkaMessage>(producerFactory());
    }

    @Bean
    public UserRoleTemplate userRoleTemplate() {
        return new UserRoleTemplate(this.kafkaTemplate());
    }

    @Bean
    public AppResTemplate appResTemplate() {
        return new AppResTemplate(this.kafkaTemplate());
    }
}
