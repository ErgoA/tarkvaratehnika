package com.example.tvtehnika;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Bean;
import com.example.tvtehnika.controller.*;
import com.example.tvtehnika.model.*;
import com.example.tvtehnika.repository.*;


@RunWith(SpringRunner.class)
@SpringBootTest

public class ModelTests {
	
	Team team=new Team("Arsenal","England","Vasjan", "911","vasjan@gmail.com","cool team bro"); 
	@Test
	public void teamModelTest() throws Exception {
        assertThat(team).isNotNull();
    }

	Player player=new Player("PK257/1",22);
	@Test
	public void playerModelTest() throws Exception {
		assertThat(player).isNotNull();
    }
	
	Tournament tournament=new Tournament("TTY CUP","Martin Luther","This tournament is for reformators.");
	@Test
	public void tournamentModelTest() throws Exception {
		assertThat(tournament).isNotNull();
    }


}

