package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.GameTable;
import com.example.demo.repository.GameRepo;

@Service
public class GameService {
     @Autowired 
     GameRepo gRepo;
     public GameTable create(GameTable gametable) {
    	 return gRepo.save(gametable);
     }
     public Optional<GameTable> read(int id)
 	{
 		return gRepo.findById(id);
 	}
 	public GameTable update(GameTable gametable)
 	{
 		return gRepo.save(gametable);
 	}
 	public String delete (int id)
 	{
 		gRepo.deleteById(id);
 		return "Deleted";
 	}

}