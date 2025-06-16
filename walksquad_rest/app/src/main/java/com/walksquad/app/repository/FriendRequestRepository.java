package com.walksquad.app.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walksquad.app.model.FriendRequest;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequest, UUID> {

    FriendRequest findByUserIdAndSenderId(UUID userId, UUID senderId);
    List<FriendRequest> findByUserId(UUID userId);
    void deleteByUserIdAndSenderId(UUID userId, UUID senderId);
}
