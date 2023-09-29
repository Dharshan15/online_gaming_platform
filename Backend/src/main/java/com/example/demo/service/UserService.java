package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	
	public void save(User user) {
        uRepo.save(user);
    }

    public User findByUsername(String username) {
        return uRepo.findByUsername(username);
    }

    public List<User> findAll() {
        return uRepo.findAll();
    }

}
