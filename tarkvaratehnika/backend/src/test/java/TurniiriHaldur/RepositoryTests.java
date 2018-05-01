package TurniiriHaldur;

import static org.assertj.core.api.Assertions.assertThat;

import TurniiriHaldur.model.Player;
import TurniiriHaldur.model.Team;
import TurniiriHaldur.model.Tournament;
import TurniiriHaldur.repository.PlayerRepository;
import TurniiriHaldur.repository.TeamRepository;
import TurniiriHaldur.repository.TournamentRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import TurniiriHaldur.controller.*;
import TurniiriHaldur.model.*;
import TurniiriHaldur.repository.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)

public class RepositoryTests {
	@Autowired
    private TestEntityManager entityManager;
 
    @Autowired
    private TournamentRepository tournamentRepository;
	
	@Test
	public void whenFindByName_thenReturnTournament() {
    // given
    Tournament tournament = new Tournament("Jalka","Sister Susie","Cool tournament");
    entityManager.persist(tournament);
    entityManager.flush();
 
    // when
    Tournament found = tournamentRepository.findByName(tournament.getName());
 
    // then
    assertThat(found.getName())
      .isEqualTo(tournament.getName());
	}
	
	@Autowired 
	private TeamRepository teamRepository;
	
	@Test
	public void whenFindByName_thenReturnTeam() {
    // given
	//   public Team(String name, String country, String contactPerson, String contactPhoneNumber, String contactEmail, String comment)
    Team team = new Team("Liverpool FC","England","Vasjan", "911","vasjan@gmail.com","cool team bro");
    entityManager.persist(team);
    entityManager.flush();
 
    // when
    Team found = teamRepository.findByName(team.getName());
 
    // then
    assertThat(found.getName())
      .isEqualTo(team.getName());
	}
	
	@Autowired 
	private PlayerRepository playerRepository;
	
	@Test
	public void whenFindByName_thenReturnPlayer() {
    // given
    Player player = new Player("David Steroid", 55);
    entityManager.persist(player);
    entityManager.flush();
 
    // when
    Player found = playerRepository.findByName(player.getName());
 
    // then
    assertThat(found.getName())
      .isEqualTo(player.getName());
	}

	@Test
	public void playerByTeam() {
    // given
    Player player = new Player("Robin Under the Hood", 66); 
	Team team = new Team("Raji","Hakas","Oliver Twist", "112", "Oliver@hot.ee","cool team");
	entityManager.persist(team);
	player.setTeam(team);
    entityManager.persist(player);
    entityManager.flush();
 
    // when
    Player found = playerRepository.findByName(player.getName());
 
    // then
    assertThat(found.getTeam())
      .isEqualTo(player.getTeam());
	}
}