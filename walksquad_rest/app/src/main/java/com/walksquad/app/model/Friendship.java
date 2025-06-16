package com.walksquad.app.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "friendship")
public class Friendship {

    @Id
    @JsonProperty(value = "Id")
    @Column(name = "id", columnDefinition = "UUID DEFAULT uuid_generate_v4()")
    private UUID id;
    
    @JsonProperty(value = "User")
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "UUID")
    private User user;

    @JsonProperty(value = "Friend")
    @ManyToOne
    @JoinColumn(name = "friendId", referencedColumnName = "UUID")
    private User friend;

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

    public User getFriend() {
        return friend;
    }

    public void setFriend(User friend) {
        this.friend = friend;
    }
}
