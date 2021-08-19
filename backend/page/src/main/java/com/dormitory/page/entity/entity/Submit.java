package com.dormitory.page.entity.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Submit {
    private int id;
    private String userId;
    @JsonProperty(value = "UUKey")
    private String uuKey;
    private String eai_sess;
    private String location;
    private String email;
    private String at_school;
    private String flag;

    public String getUuKey() {
        return uuKey;
    }

    public void setUuKey(String uuKey) {
        this.uuKey = uuKey;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    public String getEai_sess() {
        return eai_sess;
    }

    public void setEai_sess(String eai_sess) {
        this.eai_sess = eai_sess;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAt_school() {
        return at_school;
    }

    public void setAt_school(String at_school) {
        this.at_school = at_school;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }
}
