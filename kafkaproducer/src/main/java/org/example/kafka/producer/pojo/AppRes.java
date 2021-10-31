package org.example.kafka.producer.pojo;

public class AppRes {
    private long id;
    private String resName;
    private String resFP;
    private long parentId;
    private long appId;
    private String appName;

    public AppRes(long id, String resName, String resFP, long parentId, long appId, String appName) {
        this.id = id;
        this.resName = resName;
        this.resFP = resFP;
        this.parentId = parentId;
        this.appId = appId;
        this.appName = appName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getResName() {
        return resName;
    }

    public void setResName(String resName) {
        this.resName = resName;
    }

    public String getResFP() {
        return resFP;
    }

    public void setResFP(String resFP) {
        this.resFP = resFP;
    }

    public long getParentId() {
        return parentId;
    }

    public void setParentId(long parentId) {
        this.parentId = parentId;
    }

    public long getAppId() {
        return appId;
    }

    public void setAppId(long appId) {
        this.appId = appId;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    @Override
    public String toString() {
        return "AppRes{" +
                "id=" + id +
                ", resName='" + resName + '\'' +
                ", resFP='" + resFP + '\'' +
                ", parentId=" + parentId +
                ", appId=" + appId +
                ", appName='" + appName + '\'' +
                '}';
    }
}
