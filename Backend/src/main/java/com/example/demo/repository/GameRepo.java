package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.GameTable;

@Repository
public interface GameRepo extends JpaRepository<GameTable,Integer> {

}
