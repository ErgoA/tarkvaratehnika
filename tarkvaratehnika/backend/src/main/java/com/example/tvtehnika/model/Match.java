package com.example.tvtehnika.model;

import javax.persistence.*;

@Entity(name="footballmatch")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @ManyToOne(fetch= FetchType.LAZY)
    private Team team1;

    @ManyToOne(fetch=FetchType.LAZY)
    private Team team2;

    private String result;

    @ManyToOne(fetch=FetchType.LAZY)
    private Tournament tournament;

    public Tournament getTournament() {
        return tournament;
    }

    public void setTournament(Tournament tournament) {
        this.tournament = tournament;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public Team getTeam1() {
        return team1;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

    public Team getTeam2() {
        return team2;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Match() {
    }
}
