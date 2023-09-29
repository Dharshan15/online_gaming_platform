package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.UserLoginDTO;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService uService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        User existingUser = uService.findByUsername(user.getUsername());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Already existing user! Please login.");
        }
        
        uService.save(user);

        return ResponseEntity.ok("User registered successfully");
    }    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginDTO loginDTO) {
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();

        User user = uService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
    
    @GetMapping("/fetch")
    public List<User> getAllUsers() {
        return uService.findAll();
    }
}
