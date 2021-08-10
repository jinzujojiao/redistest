package org.example.kafka.consumer.redis.command;

public class IllegalCommandException extends Exception {
    public IllegalCommandException(String errMsg) {
        super(errMsg);
    }
}
