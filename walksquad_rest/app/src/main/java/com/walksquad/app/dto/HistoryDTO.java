package com.walksquad.app.dto;

import java.time.LocalDate;
import java.util.UUID;

import com.walksquad.app.model.History;

public class HistoryDTO {
    
    private UUID id;
    private UUID userId;
    private LocalDate date;
    private int steps;

    public HistoryDTO() {
        this.id = null;
        this.userId = null;
        this.date = LocalDate.now();
        this.steps = 0;
    }

    public HistoryDTO(History history) {
        this.id = history.getUuid();
        this.userId = history.getUser().getUuid();
        this.date = history.getDate();
        this.steps = history.getSteps();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
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
