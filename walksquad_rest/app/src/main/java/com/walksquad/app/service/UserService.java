package com.walksquad.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.walksquad.app.dto.FriendRequestDTO;
import com.walksquad.app.dto.FriendshipDTO;
import com.walksquad.app.dto.ProiflePageDTO;
import com.walksquad.app.dto.UserHomepageDTO;
import com.walksquad.app.model.User;
import com.walksquad.app.repository.FriendRequestRepository;
import com.walksquad.app.repository.FriendshipRepository;
import com.walksquad.app.repository.UserPropertiesRepository;
import com.walksquad.app.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRequestRepository friendRequestRepository;

    @Autowired
    private FriendshipRepository friendshipRepository;

    @Autowired
    private UserPropertiesRepository userPropertiesRepository;

    public User findUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public UserHomepageDTO getUserHomepage(User user) {

        List<FriendshipDTO> friends = friendshipRepository
            .findByUserId(user.getUuid())
            .stream()
            .map(FriendshipDTO::new)
            .collect(Collectors.toList());

        List<FriendRequestDTO> friendRequests = friendRequestRepository
            .findByUserId(user.getUuid())
            .stream()
            .map(FriendRequestDTO::new)
            .collect(Collectors.toList());

        return new UserHomepageDTO(friendRequests, friends);
    }

    public ProiflePageDTO getProfilePage(User user) {
        
        return new ProiflePageDTO(user, userPropertiesRepository.findByUserId(user.getUuid()));
    }

    public void setUserDailySteps(User user, int dailySteps) throws Exception {
        if (dailySteps < 0) {
            throw new Exception("Steps cannot be less than 0!");
        }
        user.setDailySteps(dailySteps);
        this.save(user);
    }

    @Transactional
    private User save(User user) {
        return userRepository.save(user);
    }
    
}
