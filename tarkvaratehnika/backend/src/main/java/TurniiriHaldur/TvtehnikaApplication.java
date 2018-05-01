package com.example.tvtehnika;

import com.example.tvtehnika.model.Match;
import com.example.tvtehnika.model.Player;
import com.example.tvtehnika.model.Team;
import com.example.tvtehnika.model.Tournament;
import com.example.tvtehnika.repository.MatchRepository;
import com.example.tvtehnika.repository.PlayerRepository;
import com.example.tvtehnika.repository.TeamRepository;
import com.example.tvtehnika.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@SpringBootApplication
public class TvtehnikaApplication {

	public static void main(String[] args) {

		SpringApplication.run(TvtehnikaApplication.class, args);
	}
	@Bean
	public CommandLineRunner demo2(@Autowired TeamRepository repository) {
		return (args) -> {
			

				// delete all teams
				repository.deleteAll();
				
				// save a couple of teams
				repository.save(new Team("Metkitsed","Estonia","Martin Luther","58163927","info@info.ee","cool stuff bro"));
				repository.save(new Team("Kitsed","Latvia","Wolfgang Amadeus Mozart","58819456","info@info.lv","cool stuff bro"));
				repository.save(new Team("Metssead","Lithuania","Johann Bach","58819313","info@info.lt","cool stuff bro"));
				repository.save(new Team("Sead","Ukraine","Pyotr Tschaikovsky","1434343`","info@info.ua","cool stuff bro"));
				repository.save(new Team("Lehmad","Russia","Johann Strauss","5245724","info@info.ru","cool stuff bro"));
				repository.save(new Team("Hobused","Australia","Rimski-Korsakov","5724572457","info@info.com.au","cool stuff bro"));
				repository.save(new Team("Koerad","Sweden","Igor Stravinsky","58724724","info@info.sw","cool stuff bro"));
				repository.save(new Team("Kassid","Finland","Paul Scholes","57393579","info@info.fi","cool stuff bro"));
				repository.save(new Team("Haned","Poland","William Tell","5835835","info@info.pl","cool stuff bro"));
				repository.save(new Team("Kanad","Norway","Madonna","5358885","info@info.nw","cool stuff bro"));
				repository.save(new Team("Pardid","Germany","Vladimir Klichko","583568888","info@info.de","cool stuff bro"));

		};
	}

	@Bean
	public CommandLineRunner demo4(@Autowired TournamentRepository repository) {
		return (args) -> {
				// delete all tournaments
				repository.deleteAll();
				
				// add a couple of tournaments
				repository.save(new Tournament("Pig Cup","Albert Einstein","This tournament is for scientists."));
				repository.save(new Tournament("Cow Cup","Sister Susie","This tournament is for little old people."));
				repository.save(new Tournament("Horse Cup","Brother John","This tournament is for little brothers and sisters."));
				repository.save(new Tournament("Goose Cup","Phil Collins","This tournament is for little singers"));
				repository.save(new Tournament("Goat Cup","Al Pacino","This tournament is for little domestic animals."));
		};
	}

	@Bean
	public CommandLineRunner demo5(@Autowired PlayerRepository repository, @Autowired TeamRepository teamRepository) {
		return (args) -> {

			// delete all players
			repository.deleteAll();

			// add 90 players to different teams
			List<Integer> teamIds = teamRepository.getAllIds();
			for (int i = 1; i < 91; i++) {

				StringBuilder name = new StringBuilder();
				name.append("Player");
				name.append(i);
				String playername = name.toString();
				Player player = new Player(playername, i);

				int randomTeamIdNumber = ThreadLocalRandom.current().nextInt(0, teamIds.size());
				Integer teamIdLong = teamIds.get(randomTeamIdNumber);
				Team team = teamRepository.getOne(teamIdLong);
				player.setTeam(team);

				repository.save(player);
			}

		};
	}

		@Bean
		public CommandLineRunner demo6(@Autowired MatchRepository matchrepository, @Autowired TeamRepository teamRepository) {
			return (args) -> {

				// delete all matches
				matchrepository.deleteAll();

				// add different matches
				List<Integer> teamIds=teamRepository.getAllIds();
				for(int i=1;i<10;i++){
					Match match=new Match();
					String res="";

					int randomTeamIdNumber=ThreadLocalRandom.current().nextInt(0, teamIds.size());
					Integer teamIdLong=teamIds.get(randomTeamIdNumber);
					Team team1 = teamRepository.getOne(teamIdLong);
					match.setTeam1(team1);
					res=res.concat(String.valueOf(teamIds.size()-teamIdLong));
					res=res.concat("-");

					randomTeamIdNumber=ThreadLocalRandom.current().nextInt(0, teamIds.size());
					teamIdLong=teamIds.get(randomTeamIdNumber);
					Team team2=teamRepository.getOne(teamIdLong);
					match.setTeam2(team2);

					res=res.concat(String.valueOf(teamIds.size()-teamIdLong));
					match.setResult(res);

					matchrepository.save(match);
				}

			};




		}


}
