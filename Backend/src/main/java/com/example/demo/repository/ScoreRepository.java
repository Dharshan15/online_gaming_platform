package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ScoreEntity;

@Repository
public interface ScoreRepository extends JpaRepository<ScoreEntity, Long> {
    Page<ScoreEntity> findAllByOrderByUsernameAsc(Pageable pageable);
    List<ScoreEntity> findByUsernameContainingIgnoreCase(String query);
}
