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

public class UserRoleTemplate extends AbstractKafkaMessageTemplate {

    private static Logger logger = LoggerFactory.getLogger(UserRoleTemplate.class);

    //private KafkaTemplate<String, KafkaMessage> kafkaTemplate;

    public UserRoleTemplate(KafkaTemplate<String, KafkaMessage> kafkaTemplate) {
        super(kafkaTemplate);
    }

    public String getTopic() {
        return "user2role";
    }

    @Override
    public Class getSupportedDTO() {
        return UserRoleMapping.class;
    }

    /*public ListenableFuture<SendResult<String, KafkaMessage>> doSend(KafkaMessage message) {
        if (!(message instanceof UserRoleMapping)) {
            throw new ClassCastException("It should be UserRoleMapping");
        }

        UserRoleMapping userRoleMapping = (UserRoleMapping) message;
        return kafkaTemplate.send(getTopic(), userRoleMapping.getUser(), userRoleMapping);
    }*/

}
