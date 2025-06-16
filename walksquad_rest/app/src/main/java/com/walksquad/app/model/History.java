package com.walksquad.app.model;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "history")
public class History {
    
    @Id
    @JsonProperty(value = "UUID")
    @Column(name = "id", columnDefinition = "UUID DEFAULT uuid_generate_v4()")
    private UUID uuid;

    @JsonProperty(value = "User")
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "UUID")
    private User user;

    @JsonProperty(value = "Date")
    @Column(name = "date")
    private LocalDate date;

    @JsonProperty(value = "Steps")
    @Column(name = "steps")
    private int steps;

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getSteps() {
        return steps;
    }

    public void setSteps(int steps) {
        this.steps = steps;
    }
}
