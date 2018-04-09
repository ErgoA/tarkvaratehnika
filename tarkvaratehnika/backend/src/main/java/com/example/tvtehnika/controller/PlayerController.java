package com.example.tvtehnika.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.tvtehnika.repository.*;
import com.example.tvtehnika.model.*;


import javax.persistence.JoinColumn;
import java.util.List;

@Controller
@RequestMapping(path="/api")
public class PlayerController {
    @Autowired PlayerRepository playerRepository;
    @Autowired TeamRepository teamRepository;
    //get all players
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/players")
    public @ResponseBody List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    // create a new player
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/addPlayer")
    public @ResponseBody String createPlayer(@RequestParam(value="name", required=true) String name,
                                           @RequestParam(value="number", required=true) int number,
                                           @RequestParam(value="teamId", required=false) int teamId ){

        Player player=new Player();
        player.setName(name);
        player.setNumber(number);
        Team team = teamRepository.getOne(teamId);
        player.setTeam(team);
        /*
        Team team=teamRepository.findById(teamId);
        player.setTeam(team);
        */
		/*
        if(teamId != 0 ) {
            Team hostTeam = teamRepository.findById(teamId).orElseThrow(() -> new ResourceNotFoundException("Team not found"));
            try {
                player.setHostTeam(hostTeam);
            }catch(Exception ex){
                playerRepository.save(player);
                return "team not found";
            }
        }
	*/
        playerRepository.save(player);
        return "Saved";
    }
	
	//Get Players by team_id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/playersByTeam/{teamId}")
    public @ResponseBody List<Player> getAllPlayersByTeamId(@PathVariable(value = "teamId") int teamId) {
        return playerRepository.findByTeamid(teamId);
    }

}
