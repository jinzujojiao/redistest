package org.example.kafka.common.dto;

public class AppRes extends KafkaMessage{
    private String app;
    private String res;

    public AppRes() {

    }

    public AppRes(String app, String res, Action action, long timestamp) {
        super(action, timestamp);
        this.app = app;
        this.res = res;
    }

    public String getApp() {
        return app;
    }

    public void setApp(String app) {
        this.app = app;
    }

    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res;
    }

    @Override
    public String toString() {
        return "AppRes{" +
                "app='" + app + '\'' +
                ", res='" + res + "\', " +
                super.toString() +
                '}';
    }

    @Override
    public String getKey() {
        return getApp();
    }
}
