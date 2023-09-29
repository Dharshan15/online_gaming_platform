package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tournament;
import com.example.demo.repository.TournamentRepository;

@Service
public class TournamentService {
    private final TournamentRepository tournamentRepository;

    @Autowired
    public TournamentService(TournamentRepository tournamentRepository) {
        this.tournamentRepository = tournamentRepository;
    }

    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    public Optional<Tournament> getTournamentById(Long id) {
        return tournamentRepository.findById(id);
    }

    public void createTournament(Tournament tournament) {
        
         tournamentRepository.save(tournament);
    }

    public Tournament updateTournament(Long id, Tournament updatedTournament) {
        Optional<Tournament> existingTournament = tournamentRepository.findById(id);
        if (existingTournament.isPresent()) {
            Tournament tournament = existingTournament.get();
            tournament.setTournamentName(updatedTournament.getTournamentName());
            tournament.setGameName(updatedTournament.getGameName());
            tournament.setPrizeMoney(updatedTournament.getPrizeMoney());
            return tournamentRepository.save(tournament);
        }
        return null;
    }

    public void deleteTournament(Long id) {
        tournamentRepository.deleteById(id);
    }
}
