package TurniiriHaldur;

import static org.assertj.core.api.Assertions.assertThat;
import TurniiriHaldur.controller.PlayerController;
import TurniiriHaldur.controller.TeamController;
import TurniiriHaldur.controller.TournamentController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;
import TurniiriHaldur.controller.*;
import TurniiriHaldur.model.*;
import TurniiriHaldur.repository.*;


@RunWith(SpringRunner.class)
@SpringBootTest
//@DataJpaTest
//@AutoConfigureTestDatabase(replace=NONE)

public class ControllerTests {
	@Autowired
	private TeamController teamController;
	@Autowired
	public PlayerController playerController;
	@Autowired
	private TournamentController tournamentController;
	
	@Test
	public void playerControllerTest() throws Exception {
        assertThat(playerController).isNotNull();
    }
	
	@Test
	public void teamControllerTest() throws Exception {
        assertThat(teamController).isNotNull();
    }
	
	@Test
	public void tournamentControllerTest() throws Exception {
        assertThat(tournamentController).isNotNull();
    }
}