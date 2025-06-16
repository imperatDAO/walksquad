package com.walksquad.app.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walksquad.app.model.History;

@Repository
public interface HistoryRepository extends JpaRepository<History, UUID> {

    History findByUserIdAndDate(UUID userId, LocalDate date);
    List<History> findByUserIdOrderByDateDesc(UUID userid);
    List<History> findByUserId(UUID userId);

}
