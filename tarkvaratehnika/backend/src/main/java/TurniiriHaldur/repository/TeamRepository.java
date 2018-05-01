package TurniiriHaldur.repository;

import TurniiriHaldur.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import TurniiriHaldur.model.*;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
	@Query(value="Select id from team",nativeQuery=true)
	List<Integer> getAllIds();
	Team findByName(String name);

}