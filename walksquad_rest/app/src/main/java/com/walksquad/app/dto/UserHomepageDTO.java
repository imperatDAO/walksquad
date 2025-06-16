package com.walksquad.app.dto;

import java.util.ArrayList;
import java.util.List;

public class UserHomepageDTO {
    
    private List<FriendRequestDTO> friendRequests;
    private List<FriendshipDTO> friends;

    public UserHomepageDTO() {}

    public UserHomepageDTO(List<FriendRequestDTO> friendsRequests, List<FriendshipDTO> friends) {
        this.friends = friends != null ? friends : new ArrayList<>();
        this.friendRequests = friendRequests != null ? friendRequests : new ArrayList<>();
    }

    public List<FriendRequestDTO> getFriendRequests() {
        return friendRequests;
    }

    public void setFriendRequests(List<FriendRequestDTO> friendRequests) {
        this.friendRequests = friendRequests;
    }

    public List<FriendshipDTO> getFriends() {
        return friends;
    }

    public void setFriends(List<FriendshipDTO> friends) {
        this.friends = friends;
    }
}
