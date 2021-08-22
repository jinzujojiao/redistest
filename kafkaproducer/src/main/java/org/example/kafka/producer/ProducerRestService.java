package org.example.kafka.producer;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.example.kafka.common.dto.AppRes;
import org.example.kafka.common.dto.KafkaMessage;
import org.example.kafka.common.dto.UserRoleMapping;
import org.example.kafka.producer.dao.UserRoleDao;
import org.example.kafka.producer.dao.exception.DaoException;
import org.example.kafka.producer.dao.exception.DataNotExistException;
import org.example.kafka.producer.template.AppResTemplate;
import org.example.kafka.producer.template.UserRoleTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaProducerException;
import org.springframework.kafka.core.KafkaSendCallback;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producer")
public class ProducerRestService {

    private static Logger logger = LoggerFactory.getLogger(ProducerRestService.class);

    @Autowired
    private UserRoleTemplate userRoleTemplate;

    @Autowired
    private AppResTemplate appResTemplate;

    @Autowired
    private UserRoleDao userRoleDao;

    @PostMapping("/user2role")
    public void user2Role(@RequestParam("user") String user, @RequestParam("role") String role) throws DaoException {
        if (userRoleDao.create(user, role) < 1) {
            logger.warn("User-Role is not created for user {} and role {}", user, role);
            return;
        }
        UserRoleMapping userRoleMapping = new UserRoleMapping(user, role, KafkaMessage.Action.ADD, System.currentTimeMillis());
        ListenableFuture<SendResult<String, KafkaMessage>> future = userRoleTemplate.send(userRoleMapping);
        future.addCallback(new KafkaSendCallback<String, KafkaMessage>() {

            @Override
            public void onSuccess(SendResult<String, KafkaMessage> result) {
                //logger.debug("Succeed in sending message: ",result);
            }

            @Override
            public void onFailure(KafkaProducerException ex) {
                ProducerRecord<String, KafkaMessage> failed = ex.getFailedProducerRecord();
                logger.error("Fail to send message for "+failed, ex);
            }

        });
        /*try {
            future.get();
        } catch (Exception e) {
            logger.error("Fail to get SendResult", e);
        }*/
    }

    @DeleteMapping("/user2role")
    public void deleteUserRole(@RequestParam("user") String user, @RequestParam("role") String role) {
        UserRoleMapping userRoleMapping = new UserRoleMapping(user, role, KafkaMessage.Action.DELETE, System.currentTimeMillis());
        ListenableFuture<SendResult<String, KafkaMessage>> future = userRoleTemplate.send(userRoleMapping);
        future.addCallback(new KafkaSendCallback<String, KafkaMessage>() {

            @Override
            public void onSuccess(SendResult<String, KafkaMessage> result) {
                logger.info("Succeed in sending message: "+result);
            }

            @Override
            public void onFailure(KafkaProducerException ex) {
                ProducerRecord<String, KafkaMessage> failed = ex.getFailedProducerRecord();
                logger.error("Fail to send message for "+failed, ex);
            }

        });
    }

    @PostMapping("/appres")
    public void createAppRes(@RequestParam("app") String app, @RequestParam("res") String resource) {
        AppRes appRes = new AppRes(app, resource, KafkaMessage.Action.ADD, System.currentTimeMillis());
        ListenableFuture<SendResult<String, KafkaMessage>> future = appResTemplate.send(appRes);
        future.addCallback(new KafkaSendCallback<String, KafkaMessage>() {

            @Override
            public void onSuccess(SendResult<String, KafkaMessage> result) {
                logger.info("Succeed in sending message: "+result);
            }

            @Override
            public void onFailure(KafkaProducerException ex) {
                ProducerRecord<String, KafkaMessage> failed = ex.getFailedProducerRecord();
                logger.error("Fail to send message for "+failed, ex);
            }

        });
    }
}
