package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.model.ScoreEntity;
import com.example.demo.repository.ScoreRepository;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<ScoreEntity> getAllScores() {
        return scoreRepository.findAll();
    }

    public void saveScore(ScoreEntity scoreEntity) {
        scoreRepository.save(scoreEntity);
    }

    public Page<ScoreEntity> getAllScores(Pageable pageable) {
        return scoreRepository.findAllByOrderByUsernameAsc(pageable);
    }

    public void deleteScore(Long id) {
        scoreRepository.deleteById(id);
    }

    public Optional<ScoreEntity> findById(Long id) {
        return scoreRepository.findById(id);
    }

    public List<ScoreEntity> searchUsersScore(String query) {
        return scoreRepository.findByUsernameContainingIgnoreCase(query);
    }
//    public ScoreEntity editIphoneModel(Long id, ScoreEntity updatedScore) {
//        // Find the existing model by ID
//        Optional<ScoreEntity> optionalModel = scoreRepository.findById(id);
//        if (optionalModel.isPresent()) {
//        	ScoreEntity existingScore = optionalModel.get();
//            
//            // Update the properties of the existing model
//            existingScore.setUsername(updatedScore.getUsername());
//            existingScore.setScore(updatedScore.getScore());
//            
//            // Save the updated model
//            return scoreRepository.save(existingScore);
//        } else {
//            return null;
//        }
//    }
}
