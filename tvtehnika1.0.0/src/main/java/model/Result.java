package model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;
import java.util.List;

/**
 * Created by Denis on 26/02/2018.
 */

@Data
@Entity

public class Result {
    private @Id
    @GeneratedValue
    Long id;
    private Date date;
    private List<Team> teams;
    private List<Card> cards;
    private List<Player> goalScorers;

    public Result(Date date, List<Team> teams, List<Card> cards, List<Player> goalScorers) {
        this.date = date;
        this.teams = teams;
        this.cards = cards;
        this.goalScorers = goalScorers;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public List<Player> getGoalScorers() {
        return goalScorers;
    }

    public void setGoalScorers(List<Player> goalScorers) {
        this.goalScorers = goalScorers;
    }

    public Result() {

    }
}
