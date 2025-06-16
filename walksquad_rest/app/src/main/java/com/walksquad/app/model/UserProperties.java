package com.walksquad.app.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.walksquad.app.constants.Avatar;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_properties")
public class UserProperties {
    
    @Id
    @JsonProperty(value = "Id")
    @Column(name = "id", columnDefinition = "UUID DEFAULT uuid_generate_v4()")
    private UUID id;

    @JsonProperty(value = "User")
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "UUID")
    private User user;

    @JsonProperty(value = "AvatarName")
    @Column(name = "avatarName")
    private Avatar avatar;

    @JsonProperty(value = "FirstName")
    @Column(name = "firstName")
    private String firstName;

    @JsonProperty(value = "LastName")
    @Column(name = "lastName")
    private String lastName;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Avatar getAvatar() {
        return avatar;
    }

    public void setAvatar(Avatar avatar) {
        this.avatar = avatar;
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
