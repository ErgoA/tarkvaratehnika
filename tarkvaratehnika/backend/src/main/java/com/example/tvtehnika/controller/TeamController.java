package com.example.tvtehnika.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.tvtehnika.repository.*;
import com.example.tvtehnika.model.*;
import java.util.List;

@Controller
@RequestMapping(path="/api")
public class TeamController {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    PlayerRepository playerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/teams")
    public @ResponseBody List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/addTeam")
    public @ResponseBody String createNewTeam(@RequestParam(value="name", required=true) String name,
                                              @RequestParam(value="country", required=false) String country,
                                              @RequestParam(value="contactPerson", required=false) String contactPerson,
                                              @RequestParam(value="contactPhoneNumber", required=false) String contactPhoneNumber,
                                              @RequestParam(value="contactEmail", required=false) String contactEmail,
                                              @RequestParam(value="comment", required=false) String comment){

        Team team = new Team();
        team.setName(name);
        team.setCountry(country);
        team.setContactPerson(contactPerson);
        team.setContactEmail(contactEmail);

        if(contactPhoneNumber != null && !contactPhoneNumber.isEmpty()) {
            team.setContactPhoneNumber(contactPhoneNumber);
        }
        if(comment != null && !comment.isEmpty()) {
            team.setComment(comment);
        }

        teamRepository.save(team);
        return "Saved";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/team/{id}")
    public @ResponseBody Team getTeamById(@PathVariable(value = "id") int teamId) {
        return teamRepository.findById(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("Team not found"));
    }

	/*
    //Get Players
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/team/players/{teamId}")
    public @ResponseBody List<Player> getAllPlayersByTeamId(@PathVariable(value = "teamId") int teamId) {
        return playerRepository.findByteam_id(teamId);
    }
*/
}