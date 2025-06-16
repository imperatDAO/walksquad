package com.walksquad.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.walksquad.app.dto.FriendRequestDTO;
import com.walksquad.app.dto.SendFriendRequest;
import com.walksquad.app.service.FriendRequestService;

@RestController
@RequestMapping("/api/friendRequest")
public class FriendRequestController {

    @Autowired
    private FriendRequestService friendRequestService;

    @PostMapping("/accept")
    public ResponseEntity<Void> acceptFriendRequest(@RequestBody FriendRequestDTO request) {
        try {
            friendRequestService.acceptFriendRequest(request.getUserId(), request.getSenderId());
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/decline")
    public ResponseEntity<Void> declineFriendRequest(@RequestBody FriendRequestDTO request) {
        try {
            friendRequestService.declineFriendRequest(request.getUserId(), request.getSenderId());
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/send")
    public ResponseEntity<Void> sendFriendRequest(@RequestBody SendFriendRequest request) {
        try {
            friendRequestService.sendFriendRequest(request.getUserName(), request.getRecipient());
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
