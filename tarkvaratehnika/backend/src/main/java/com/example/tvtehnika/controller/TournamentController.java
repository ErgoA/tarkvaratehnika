package com.example.tvtehnika.controller;

import com.example.tvtehnika.model.Match;
import com.example.tvtehnika.model.Team;
import com.example.tvtehnika.model.Tournament;
import com.example.tvtehnika.repository.MatchRepository;
import com.example.tvtehnika.repository.TeamRepository;
import com.example.tvtehnika.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path="/api")
public class TournamentController {
    @Autowired
    TournamentRepository tournamentRepository;
    @Autowired
    MatchRepository matchRepository;
    @Autowired
    TeamRepository teamRepository;

    //get all tournaments
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments")
    public @ResponseBody List<Tournament> Custom() {
		return tournamentRepository.Custom();
    }

    // create a new tournament
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/addTournament")
    public @ResponseBody String createTournament(@RequestParam String name,
        @RequestParam String organizer){
        Tournament tournament = new Tournament();
        tournament.setName(name);
        tournament.setOrganizer(organizer);
        tournamentRepository.save(tournament);

        return "Saved";
    }

    // get a Single Tournament by id
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments/{id}")
    public @ResponseBody Tournament getTournamentById(@PathVariable(value = "id") int tournamentId) {
        return tournamentRepository.findById(tournamentId)
                .orElseThrow(() -> new ResourceNotFoundException("Tournament not found"));
    }

    // get Matches by tournamentId
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/matchesByTournament/{tournamentId}")
    public @ResponseBody List<Match> getAllMatchesByTournamentId(@PathVariable(value = "tournamentId") int tournamentId) {
        return matchRepository.findByTournamentId(tournamentId);
    }

    // add teams to tournament
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/addTeamsToTournament")
    public @ResponseBody String addTeamsToTournament(@RequestParam Integer tournamentId,
                                                 @RequestParam Integer[] teamIds){
        Tournament tournament = tournamentRepository.getOne(tournamentId);
        for(int teamId:teamIds){
            Team team=teamRepository.getOne(teamId);
            tournament.getTeams().add(team);
        }
        tournamentRepository.save(tournament);

        return "Saved";
    }

    // show tournament's teams
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/teamsByTournament/{tournamentId}")
    public @ResponseBody List<Team> getAllTeamsByTournamentId(@PathVariable(value = "tournamentId") int tournamentId) {
        Tournament tournament=tournamentRepository.getOne(tournamentId);
        List<Team> teams=new ArrayList<Team>();
        teams.addAll(tournament.getTeams());
        return teams;
    }





}