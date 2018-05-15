package com.example.tvtehnika.controller;

import com.example.tvtehnika.model.Player;
import com.example.tvtehnika.model.Team;
import com.example.tvtehnika.repository.PlayerRepository;
import com.example.tvtehnika.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/api")
public class PlayerController {
    @Autowired PlayerRepository playerRepository;
    @Autowired TeamRepository teamRepository;
    // get all players
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
        playerRepository.save(player);
        return "Saved";
    }
	
	// get Players by team_id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/playersByTeam/{teamId}")
    public @ResponseBody List<Player> getAllPlayersByTeamId(@PathVariable(value = "teamId") int teamId) {
        return playerRepository.findByTeamid(teamId);
    }

    // update player's stats
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/updatePlayerStats")
    public @ResponseBody String updatePlayerStats(@RequestParam(value="id", required=true) int playerId,
                                             @RequestParam(value="goal", required=false,defaultValue = "0") int goal,
                                              @RequestParam(value="assist", required=false,defaultValue = "0") int assist,
                                             @RequestParam(value="yellowCard", required=false,defaultValue = "0") int yellowCard,
                                             @RequestParam(value="redCard",required = false,defaultValue="0") int redCard){
        Player player=playerRepository.getOne(playerId);
        player.setGoals(player.getGoals()+goal);
        player.setAssists(player.getAssists()+assist);
        player.setYellowCards(player.getYellowCards()+yellowCard);
        player.setRedCards(player.getRedCards()+redCard);
        playerRepository.save(player);
        return "Updated";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/playersStats")
    public @ResponseBody List<Object[]> getAllPlayersStats() {
        return playerRepository.findstats();
    }





}
