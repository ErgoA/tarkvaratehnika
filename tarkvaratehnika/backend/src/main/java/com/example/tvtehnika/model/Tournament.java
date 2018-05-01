package com.example.tvtehnika.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Tournament {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    private String name;
    private String Organizer;
    private String info;

    @OneToMany(mappedBy="tournament")
    private Set<Match> matches=new HashSet<>();


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "tournament_teams",
            joinColumns = { @JoinColumn(name = "tournament_id") },
            inverseJoinColumns = { @JoinColumn(name = "team_id") })
    @JsonIgnoreProperties("tournaments")
    private Set<Team> teams=new HashSet<>();

    public Tournament(String name, /*Date date,*/ String organizer, String info) {
        this.name = name;
        //this.date = date;
        this.Organizer = organizer;
        this.info=info;
    }

    public Tournament() {
    }

    public int getId() {
        return Id;
    }


    public void setId(int id) {
        Id = id;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrganizer() {
        return Organizer;
    }

    public void setOrganizer(String organizer) {
        Organizer = organizer;
    }


    public Set<Team> getTeams() {
        return teams;
    }

    public void setTeams(Set<Team> teams) {
        this.teams = teams;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
