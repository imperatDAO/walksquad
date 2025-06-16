package com.walksquad.app.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.walksquad.app.dto.FriendshipDTO;
import com.walksquad.app.model.FriendRequest;
import com.walksquad.app.model.User;
import com.walksquad.app.repository.FriendRequestRepository;
import com.walksquad.app.repository.FriendshipRepository;

import jakarta.transaction.Transactional;

@Service
public class FriendRequestService {

    @Autowired
    private FriendRequestRepository friendRequestRepository;

    @Autowired
    private FriendshipRepository friendshipRepository;

    @Autowired
    private FriendshipService friendshipService;

    @Autowired
    private UserService userService;

    public void acceptFriendRequest(UUID userId, UUID senderId) throws Exception {

        if(friendshipRepository.findbyUserIdAndFriendId(userId, senderId) == null) {
            FriendshipDTO friendshipDTO = new FriendshipDTO();
            friendshipDTO.setFriendId(senderId);
            friendshipDTO.setUserId(userId); 
            friendshipService.save(friendshipDTO);
            deleteFriendshipRequest(userId, senderId);
        } else {
            throw new Exception("Error: Friendship already exists!");
        }
    }

    public void declineFriendRequest(UUID userId, UUID senderId) throws Exception {

        deleteFriendshipRequest(userId, senderId);
        deleteFriendshipRequest(senderId, userId);
    }

    public void sendFriendRequest(String userName, String recipient) throws Exception {
        User user = userService.findUserByUserName(userName);
        User recipientUser = userService.findUserByUserName(recipient);
        if(
            (friendRequestRepository.findByUserIdAndSenderId(user.getUuid(), recipientUser.getUuid()) == null) &&
            (friendRequestRepository.findByUserIdAndSenderId(recipientUser.getUuid(), user.getUuid()) == null)
            ) {
            FriendRequest friendRequest = new FriendRequest();
            friendRequest.setUser(recipientUser);
            friendRequest.setSender(user);
            save(friendRequest);
        } else {
            throw new Exception("Error there is a pending friend request!");
        }
    }

    @Transactional
    public void deleteFriendshipRequest(UUID userId, UUID senderId) {
        friendRequestRepository.deleteByUserIdAndSenderId(userId, senderId);
    }

    @Transactional
    public void save(FriendRequest friendRequest) {
        friendRequestRepository.save(friendRequest);
    }

    

    
    
}
