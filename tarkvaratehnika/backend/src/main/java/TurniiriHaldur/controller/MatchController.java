package TurniiriHaldur.controller;

import TurniiriHaldur.model.Match;
import TurniiriHaldur.model.Team;
import TurniiriHaldur.model.Tournament;
import TurniiriHaldur.repository.MatchRepository;
import TurniiriHaldur.repository.TeamRepository;
import TurniiriHaldur.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import TurniiriHaldur.repository.*;
import TurniiriHaldur.model.*;

import java.util.List;

@Controller
@RequestMapping(path="/api")
public class MatchController {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    MatchRepository matchRepository;
    @Autowired
    TournamentRepository tournamentRepository;

    // get all matches
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/matches")
    public @ResponseBody List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    // create a new match
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/addMatch")
    public @ResponseBody String createMatch(@RequestParam(value="team1Id", required=true) int team1Id,
                                            @RequestParam(value="team2Id", required=true) int team2Id,
                                            @RequestParam(value="result", required=false) String result,
                                            @RequestParam(value="tournamentId",required=false) int tournamentId){


        Team team1=teamRepository.getOne(team1Id);
        Team team2=teamRepository.getOne(team2Id);

        Tournament tournament=tournamentRepository.getOne(tournamentId);

        Match match= new Match();
        match.setTeam1(team1);
        match.setTeam2(team2);
        match.setTournament(tournament);

        if(result!=null&&!result.isEmpty()){match.setResult(result);}

        matchRepository.save(match);
        return "Saved";
    }

    // get a Single match by id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/match/{id}")
    public @ResponseBody Match getMatchById(@PathVariable(value = "id") int matchId) {
        return matchRepository.findById(matchId)
                .orElseThrow(() -> new ResourceNotFoundException("Match not found"));
    }

    // update a match
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/updateMatch")
    public @ResponseBody String updateMatch(@RequestParam(value="matchId", required=true) int matchId,
                                            @RequestParam(value="result", required=true) String result,
                                            @RequestParam(value="tournamentId",required=false) String tournamentId){

        Match match=matchRepository.getOne(matchId);
        match.setResult(result);

        if(tournamentId!=null&&!tournamentId.isEmpty()) {
            int tId=Integer.parseInt(tournamentId);
            Tournament tournament = tournamentRepository.getOne(tId);
            match.setTournament(tournament);
        }

        matchRepository.save(match);
        return "Saved";
    }
}