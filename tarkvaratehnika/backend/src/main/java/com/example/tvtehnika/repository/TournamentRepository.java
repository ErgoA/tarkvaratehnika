package com.example.tvtehnika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.tvtehnika.model.*;

import javax.persistence.NamedNativeQuery;
import java.util.List;


@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer>{
	/*
    @Query(value = "SELECT * FROM tournament order by id asc", nativeQuery=true)
    List<Tournament> findAllOrderByIdAsc();
	@Query(value="DELETE * FROM tournament", nativeQuery=true)
	void deleteAll();
	*/
	
}

