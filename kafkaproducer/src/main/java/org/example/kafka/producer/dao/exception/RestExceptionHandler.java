package org.example.kafka.producer.dao.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    private static Logger logger = LoggerFactory.getLogger(RestExceptionHandler.class);

    @ExceptionHandler(DaoException.class)
    protected ResponseEntity<Object> handleDaoException(DaoException e) {
        logger.error("Catch DaoException", e);
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        if (e instanceof DataNotExistException) {
            status = HttpStatus.NOT_FOUND;
        } else if (e instanceof DataExistException) {
            status = HttpStatus.CONFLICT;
        }
        RestError restError = new RestError(status, e);
        return buildResp(restError);
    }

    private ResponseEntity<Object> buildResp(RestError error) {
        return new ResponseEntity<>(error, error.getStatus());
    }
}

