package com.walksquad.app.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walksquad.app.model.UserProperties;

@Repository
public interface UserPropertiesRepository extends JpaRepository<UserProperties, UUID> {

    UserProperties findByUserId(UUID userId);

}
