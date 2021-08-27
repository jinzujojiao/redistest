package org.example.kafka.producer.dao.exception;

public abstract class DaoException extends Exception {

    public DaoException(String msg) {
        super(msg);
    }
}
