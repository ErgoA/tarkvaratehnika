package TurniiriHaldur.repository;

import TurniiriHaldur.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import TurniiriHaldur.model.*;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
    @Query(value="SELECT * FROM player p where p.team_id = :team_id", nativeQuery=true)
    List<Player> findByTeamid(int team_id);
	Player findByName(String name);
}

