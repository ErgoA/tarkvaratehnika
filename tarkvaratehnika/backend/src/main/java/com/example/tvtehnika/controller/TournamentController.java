package com.example.tvtehnika.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.jpa.domain.JpaSort;
import com.example.tvtehnika.repository.*;
import com.example.tvtehnika.model.*;
import javax.persistence.Id;
import java.util.List;

@Controller
@RequestMapping(path="/api")
public class TournamentController {
    @Autowired
    TournamentRepository tournamentRepository;

	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments")
    public @ResponseBody List<Tournament> getAllTournaments() {
        //return tournamentRepository.findAllOrderByIdAsc();
		return tournamentRepository.findAll();
    }

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

	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments/{id}")
    public @ResponseBody Tournament getTournamentById(@PathVariable(value = "id") int tournamentId) {
        return tournamentRepository.findById(tournamentId)
                .orElseThrow(() -> new ResourceNotFoundException("Tournament not found"));
    }
}