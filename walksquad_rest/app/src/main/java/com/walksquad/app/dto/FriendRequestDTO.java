package com.walksquad.app.dto;

import java.util.UUID;

import com.walksquad.app.model.FriendRequest;

public class FriendRequestDTO {
    
    private UUID id;
    private UUID userId;
    private UUID senderId;

    public FriendRequestDTO() {
        this.id = null;
        this.userId = null;
        this.senderId = null;
    }

    public FriendRequestDTO(FriendRequest friendRequest) {
        this.id = friendRequest.getId();
        this.userId = friendRequest.getUser().getUuid();
        this.senderId = friendRequest.getSender().getUuid();
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

    public UUID getSenderId() {
        return senderId;
    }

    public void setSenderId(UUID senderId) {
        this.senderId = senderId;
    }
}
