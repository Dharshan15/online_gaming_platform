package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.GameTable;
import com.example.demo.service.GameService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;





@RestController
@RequestMapping("/api/gameinfo")
public class GameController {
	@Autowired
	GameService gService;
	
	//post
	@Operation(summary="Creates a new gameinfo")
	@ApiResponses(value= {@ApiResponse(responseCode="201",description="gameinfo created successfully"),
			@ApiResponse(responseCode="400",description="gameinfo details is invalid")})

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces="application/json",consumes="application/json")
	public ResponseEntity<GameTable> create(final @RequestBody GameTable gameinfo){
		GameTable creategameinfo=gService.create(gameinfo);
		return ResponseEntity.ok(creategameinfo);
	}

    //Get
	@Operation(summary="get a gameinfo ticket")

	@ApiResponses(value= {@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="gameinfo not found")
	})

	@GetMapping(value="/{id}",produces="application/json")
	public ResponseEntity<Optional<GameTable>> read(final @PathVariable int id){
		Optional<GameTable> createdgameinfo=gService.read(id);
		return ResponseEntity.ok(createdgameinfo);
	}

	//put
	@Operation(summary="Updates a gameinfo")

	@ApiResponses(value= {@ApiResponse(responseCode="200",description="gameinfo updated successfully"),
			@ApiResponse(responseCode="400",description="gameinfo details is invalid"),@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="gameinfo not found")
	})
	@PutMapping(value="/{id}",produces="application/json",consumes="application/json")
	public ResponseEntity<GameTable> update(final @RequestBody GameTable gameinfo)throws  JsonProcessingException{
		final GameTable updatedgameinfo=gService.update(gameinfo);
		return ResponseEntity.ok(updatedgameinfo);
	}
	
	//delete
	@Operation(summary="Deletes the gameinfo by given id")
	@ApiResponses(value= {@ApiResponse(responseCode="200",description="gameinfo deleted successfully"),
			@ApiResponse(responseCode="401",description="invalid credentials"),@ApiResponse(responseCode="404",description="gameinfo not found")})
	@DeleteMapping("/{id}")
	public void delete(final @PathVariable int id) {
		gService.delete(id);
	}
}