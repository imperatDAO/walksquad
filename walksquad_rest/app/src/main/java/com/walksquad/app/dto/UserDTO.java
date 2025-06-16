package com.walksquad.app.dto;

import java.util.UUID;

import com.walksquad.app.model.User;

public class UserDTO {
    
    private UUID uuid;
    private String userName;
    private int dailySteps;

    public UserDTO() {
        this.uuid = null;
        this.userName = "";
        this.dailySteps = 0;
    }

    public UserDTO(User user){
        this.uuid = user.getUuid();
        this.userName = user.getUserName();
        this.dailySteps = user.getDailySteps();
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getDailySteps() {
        return dailySteps;
    }

    public void setDailySteps(int dailySteps) {
        this.dailySteps = dailySteps;
    }
}
