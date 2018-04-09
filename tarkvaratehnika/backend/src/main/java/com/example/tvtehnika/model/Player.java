package com.example.tvtehnika.model;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.*;


@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
	private int number;
    //private enum position {Goalkeeper,Defender,Midfield,Forward};
	@ManyToOne(fetch=FetchType.LAZY)
    //@JoinColumn(name="TeamId")
    private Team team;
	
	
    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
	
  


    public Player() {
    }

    
    public Player(String name, /*Team team,*/ int number) {
        this.name = name;
        /*this.team = team;*/
        this.number = number;
    }


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
