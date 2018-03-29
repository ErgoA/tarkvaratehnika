package com.example.tvtehnika;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/api")
public class TournamentController {
    @Autowired
    TournamentRepository tournamentRepository;

    //get all tournaments
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments")
    public @ResponseBody List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
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

    // Get a Single Tournament
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments/{id}")
    public @ResponseBody Tournament getTournamentById(@PathVariable(value = "id") Long tournamentId) {
        return tournamentRepository.findById(tournamentId)
                .orElseThrow(() -> new ResourceNotFoundException("Tournament not found"));
    }

}