package com.walksquad.app.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walksquad.app.model.Friendship;

@Repository
public interface FriendshipRepository extends JpaRepository<Friendship, UUID> {

    Friendship findbyUserIdAndFriendId(UUID userId, UUID friendId);
    List<Friendship> findByUserId(UUID userId);
    void deleteByUserIdAndFriendId(UUID userId, UUID friendId);

}
