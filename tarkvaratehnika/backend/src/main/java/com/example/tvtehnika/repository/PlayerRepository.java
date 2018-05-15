package com.example.tvtehnika.repository;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import com.example.tvtehnika.model.*;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
    @Query(value="SELECT * FROM player p where p.team_id = :team_id", nativeQuery=true)
    List<Player> findByTeamid(int team_id);
	public Player findByName(String name);



	public List<Player> findAllByOrderByGoalsDesc();


    @Query(value = "SELECT name,goals,assists,yellow_cards,red_cards FROM player ORDER BY goals DESC", nativeQuery = true)
    public List<Object[]> findstats();

}

