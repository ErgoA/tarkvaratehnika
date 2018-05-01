package TurniiriHaldur.repository;

import TurniiriHaldur.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Integer> {
    @Query(value="SELECT * FROM footballmatch f where f.tournament_id = :tournament_id", nativeQuery=true)
    List<Match> findByTournamentId(int tournament_id);

}

