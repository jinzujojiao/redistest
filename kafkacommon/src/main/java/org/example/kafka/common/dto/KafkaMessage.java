package org.example.kafka.common.dto;

public abstract class KafkaMessage {
    public enum Action {
        ADD, DELETE, UPDATE
    }

    private Action action;
    private long timestamp;

    public KafkaMessage() {

    }

    public KafkaMessage(Action action, long timestamp) {
        this.action = action;
        this.timestamp = timestamp;
    }

    public Action getAction() {
        return action;
    }

    public void setAction(Action action) {
        this.action = action;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "action=" + action +
                ", timestamp=" + timestamp;
    }

    abstract public String getKey();
}
