package com.example.tvtehnika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tvtehnika.model.*;


@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Long>{

}

