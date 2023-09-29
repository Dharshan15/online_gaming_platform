package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "scores")
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private int score;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public ScoreEntity(Long id, String username, int score) {
		super();
		this.id = id;
		this.username = username;
		this.score = score;
	}
	public ScoreEntity() {
		super();
	}
	@Override
	public String toString() {
		return "ScoreEntity [id=" + id + ", username=" + username + ", score=" + score + "]";
	}
    
	
    
}