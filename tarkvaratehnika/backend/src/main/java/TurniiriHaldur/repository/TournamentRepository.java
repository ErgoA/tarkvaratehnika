package TurniiriHaldur.repository;

import TurniiriHaldur.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import TurniiriHaldur.model.*;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer>{
	/*
    @Query(value = "SELECT * FROM tournament order by id asc", nativeQuery=true)
    List<Tournament> findAllOrderByIdAsc();
	@Query(value="DELETE * FROM tournament", nativeQuery=true)
	void deleteAll();
	*/
	Tournament findByName(String name);
}

