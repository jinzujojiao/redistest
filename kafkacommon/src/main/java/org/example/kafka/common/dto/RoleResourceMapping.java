package org.example.kafka.common.dto;

public class RoleResourceMapping extends KafkaMessage {
    private String app;
    private String res;
    private String role;

    public RoleResourceMapping() {
        super();
    }

    public RoleResourceMapping(String role, String app, String res, Action action, long timestamp) {
        super(action, timestamp);
        this.app = app;
        this.res = res;
        this.role = role;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String getKey() {
        return role;
    }

    @Override
    public String toString() {
        return "RoleResourceMapping{" +
                "app='" + app + '\'' +
                ", res='" + res + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
