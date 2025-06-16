package com.walksquad.app.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.walksquad.app.dto.FriendshipDTO;
import com.walksquad.app.model.Friendship;
import com.walksquad.app.repository.FriendshipRepository;
import com.walksquad.app.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class FriendshipService {

    @Autowired
    private FriendshipRepository friendshipRepository;

    @Autowired 
    private UserRepository userRepository;

    public void removeFriend(UUID userId, UUID friendId) {
        deleteFriendship(userId, friendId);
        deleteFriendship(friendId, userId);
    }

    @Transactional
    public void save(FriendshipDTO friendshipDTO) {
        Friendship friendship = new Friendship();
        friendship.setUser(userRepository.findByUUID(friendshipDTO.getUserId()));
        friendship.setFriend(userRepository.findByUUID(friendshipDTO.getFriendId()));
        friendshipRepository.save(friendship);
    }

    @Transactional
    private Friendship save(Friendship friendship) {
        return friendshipRepository.save(friendship);
    }

    @Transactional
    public void deleteFriendship(UUID userId, UUID friendId) {
        friendshipRepository.deleteByUserIdAndFriendId(userId, friendId);
    }
    
}
