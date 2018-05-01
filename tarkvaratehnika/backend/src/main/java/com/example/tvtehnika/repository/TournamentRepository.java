package com.example.tvtehnika.repository;

import com.example.tvtehnika.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer>{
	public Tournament findByName(String name);

	@Query(value="SELECT t.id,t.name,t.organizer,t.info FROM tournament t", nativeQuery=true)
	List<Tournament> Custom();

}

