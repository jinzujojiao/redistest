package org.example.kafka.common.dto;

public class UserRoleMapping extends KafkaMessage {
    private String user;
    private String role;

    public UserRoleMapping() {
        super();
    }

    public UserRoleMapping(String user, String role, KafkaMessage.Action action, long timestamp) {
        super(action, timestamp);
        this.user = user;
        this.role = role;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserRoleMapping{" +
                "user='" + user + '\'' +
                ", role='" + role + "', " +
                super.toString() +
                '}';
    }

    @Override
    public String getKey() {
        return getUser();
    }
}
