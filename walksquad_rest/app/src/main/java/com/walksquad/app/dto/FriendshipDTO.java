package com.walksquad.app.dto;

import java.util.UUID;

import com.walksquad.app.model.Friendship;

public class FriendshipDTO {
    
    private UUID id;
    private UUID userId;
    private UUID friendId;

    public FriendshipDTO() {
        this.id = null;
        this.userId = null;
        this.friendId = null;
    }

    public FriendshipDTO(Friendship friendship) {
        this.id = friendship.getId();
        this.userId = friendship.getUser().getUuid();
        this.friendId = friendship.getFriend().getUuid();
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

    public UUID getFriendId() {
        return friendId;
    }

    public void setFriendId(UUID friendId) {
        this.friendId = friendId;
    }
}
