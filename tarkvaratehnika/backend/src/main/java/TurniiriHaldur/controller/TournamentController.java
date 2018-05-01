package TurniiriHaldur.controller;

import TurniiriHaldur.model.Tournament;
import TurniiriHaldur.model.Match;
import TurniiriHaldur.repository.MatchRepository;
import TurniiriHaldur.repository.TournamentRepository;
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
    @Autowired
    MatchRepository matchRepository;

    //get all tournaments
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/tournaments")
    public @ResponseBody List<Tournament> getAllTournaments() {
        //return tournamentRepository.findAllOrderByIdAsc();
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
}