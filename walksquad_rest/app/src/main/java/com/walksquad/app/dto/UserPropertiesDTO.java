package com.walksquad.app.dto;

import java.util.UUID;

import com.walksquad.app.constants.Avatar;
import com.walksquad.app.model.UserProperties;

public class UserPropertiesDTO {
    
    private UUID id;
    private UUID userId;
    private Avatar avatarName;
    private String firstName;
    private String lastName;

    public UserPropertiesDTO() {
        this.id = null;
        this.userId = null;
        this.avatarName = Avatar.AVATAR_DEFAULT;
        this.firstName = "";
        this.lastName = "";
    }

    public UserPropertiesDTO(UserProperties userProp) {
        this.id = userProp.getId();
        this.userId = userProp.getUser().getUuid();
        this.avatarName = userProp.getAvatar();
        this.firstName = userProp.getFirstName();
        this.lastName = userProp.getLastName();
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

    public Avatar getAvatarName() {
        return avatarName;
    }

    public void setAvatarName(Avatar avatarName) {
        this.avatarName = avatarName;
    }

    public void setAvatarName(String avatarName) {
        this.avatarName = Avatar.getAvatar(avatarName);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
