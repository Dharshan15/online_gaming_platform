package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tournamentName;
    private String gameName;
    private String prizeMoney;


    public Tournament() {
    }

    public Tournament(String tournamentName, String gameName, String prizeMoney) {
        this.tournamentName = tournamentName;
        this.gameName = gameName;
        this.prizeMoney = prizeMoney;
    }

    public Long getId() {
        return id;
    }

    public String getTournamentName() {
        return tournamentName;
    }

    public void setTournamentName(String tournamentName) {
        this.tournamentName = tournamentName;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getPrizeMoney() {
        return prizeMoney;
    }

    public void setPrizeMoney(String prizeMoney) {
        this.prizeMoney = prizeMoney;
    }

	@Override
	public String toString() {
		return "Tournament [id=" + id + ", tournamentName=" + tournamentName + ", gameName=" + gameName
				+ ", prizeMoney=" + prizeMoney + "]";
	}
        
}