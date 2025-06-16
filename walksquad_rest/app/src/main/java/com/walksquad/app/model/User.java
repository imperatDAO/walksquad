package com.walksquad.app.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    
    @Id
    @JsonProperty(value = "UUID")
    @Column(name = "UUID", columnDefinition = "UUID DEFAULT uuid_generate_v4()")
    private UUID uuid;

    @JsonProperty(value = "UserName")
    @Column(name = "userName", unique = true)
    private String userName;

    @JsonProperty(value = "Steps")
    @Column(name = "dailySteps")
    private int dailySteps;

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
