package com.walksquad.app.dto;

import com.walksquad.app.model.User;
import com.walksquad.app.model.UserProperties;

public class ProiflePageDTO {
    
    private UserDTO user;
    private UserPropertiesDTO properties;

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public UserPropertiesDTO getProperties() {
        return properties;
    }

    public void setProperties(UserPropertiesDTO properties) {
        this.properties = properties;
    }

    public ProiflePageDTO() {}

    public ProiflePageDTO(UserDTO user, UserPropertiesDTO properties) {
        this.user = user;
        this.properties = properties;
    }

    public ProiflePageDTO(User user, UserProperties properties) {
        this.user = new UserDTO(user);
        this.properties = new UserPropertiesDTO(properties);
    }
}
