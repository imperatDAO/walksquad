package com.walksquad.app.dto;

public class SendFriendRequest {

    private String userName;
    private String recipient;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public SendFriendRequest() {
        this.userName = null;
        this.recipient = null;
    }
}
