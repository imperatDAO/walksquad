package com.walksquad.app.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walksquad.app.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>{
    
    boolean existsByUserName(String userName);
    User findByUserName(String userName);
    User findByUUID(UUID UUID);
    
}
