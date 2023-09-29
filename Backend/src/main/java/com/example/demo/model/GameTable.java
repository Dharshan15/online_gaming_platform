package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "game")
public class GameTable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int gamerId;
	private String gamerTag;
	private String level;
	private int highScore;
	private int coins;
	
	public int getGamerId() {
		return gamerId;
	}
	public void setGamerId(int gamerId) {
		this.gamerId = gamerId;
	}
	public String getGamerTag() {
		return gamerTag;
	}
	public void setGamerTag(String gamerTag) {
		this.gamerTag = gamerTag;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public int getHighScore() {
		return highScore;
	}
	public void setHighScore(int highScore) {
		this.highScore = highScore;
	}
	public int getCoins() {
		return coins;
	}
	public void setCoins(int coins) {
		this.coins = coins;
	}
	public GameTable(int gamerId, String gamerTag, String level, int highScore, int coins) {
		super();
		this.gamerId = gamerId;
		this.gamerTag = gamerTag;
		this.level = level;
		this.highScore = highScore;
		this.coins = coins;
	}
	public GameTable() {
		super();
	}
	@Override
	public String toString() {
		return "GameTable [gamerId=" + gamerId + ", gamerTag=" + gamerTag + ", level=" + level + ", highScore="
				+ highScore + ", coins=" + coins + "]";
	}
	
	
	
}