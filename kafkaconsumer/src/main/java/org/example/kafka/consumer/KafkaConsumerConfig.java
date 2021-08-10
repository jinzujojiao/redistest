package org.example.kafka.consumer;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.example.kafka.common.dto.KafkaMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.AbstractKafkaListenerContainerFactory;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.listener.ContainerProperties;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableKafka
public class KafkaConsumerConfig {

    private static Logger logger = LoggerFactory.getLogger(KafkaConsumerConfig.class);

    @Bean
    public KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, KafkaMessage>>
    kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, KafkaMessage> factory =
                concurrentKafkaListenerContainerFactory();
        logger.info("kafkaListenerContainerFactory factory: "+factory);
        return factory;
    }

    private ConcurrentKafkaListenerContainerFactory<String, KafkaMessage>
    concurrentKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, KafkaMessage> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3);
        factory.getContainerProperties().setPollTimeout(3000);
        factory.setBatchListener(true);
        return factory;
    }

    @Bean
    public KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, KafkaMessage>>
    kafkaManualListenerContainerFactory() {
        /*ConcurrentKafkaListenerContainerFactory<String, KafkaMessage> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3);
        factory.getContainerProperties().setPollTimeout(3000);*/
        ConcurrentKafkaListenerContainerFactory<String, KafkaMessage> factory =
                concurrentKafkaListenerContainerFactory();
        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);
        logger.info("kafkaManualListenerContainerFactory factory: "+factory);
        return factory;
    }

    @Bean
    public ConsumerFactory<String, KafkaMessage> consumerFactory() {
        JsonDeserializer<KafkaMessage> deserializer = new JsonDeserializer<KafkaMessage>();
        deserializer.addTrustedPackages("org.example.kafka.common.dto");
        return new DefaultKafkaConsumerFactory<String, KafkaMessage>(
                consumerConfigs(), new StringDeserializer(), deserializer);
    }

    @Bean
    public Map<String, Object> consumerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "vm-lijjin-nprd-rcdn-kafka1:9092");
        return props;
    }
}
