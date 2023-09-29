package com.example.demo.controller;

import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ScoreEntity;
import com.example.demo.service.ScoreService;

@RestController
@RequestMapping("/scores")
@CrossOrigin
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping("/saveScore")
    public void saveScore(@RequestBody ScoreEntity scoreEntity) {
        scoreService.saveScore(scoreEntity);
    }

    @GetMapping("/display")
    public ResponseEntity<List<ScoreEntity>> getAllScores() {
        List<ScoreEntity> scores = scoreService.getAllScores();

        // Sort the list of ScoreEntity objects by score
//        scores.sort(Comparator.comparing(ScoreEntity::getScore));
        scores.sort(Comparator.comparing(ScoreEntity::getScore).reversed());
        return ResponseEntity.ok(scores);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteScore(@PathVariable Long id) {
        scoreService.deleteScore(id);
        return ResponseEntity.ok("Score deleted");
    }
//    @PutMapping("/{id}")
//    public ResponseEntity<ScoreEntity> editScore(@PathVariable("id") Long id, @RequestBody ScoreEntity updatedScore) {
//    	ScoreEntity editedScore = scoreService.editIphoneModel(id, updatedScore);
//        return ResponseEntity.ok(editedScore);
//    }
    
}
