package model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

/**
 * Created by Denis on 26/02/2018.
 */
@Data
@Entity
public class Tournament {
    private @Id
    @GeneratedValue
    Long id;
    private String name;
    private Date date;
    private Organizer organizer;
    private TournamentType tournamentType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Organizer getOrganizer() {
        return organizer;
    }

    public void setOrganizer(Organizer organizer) {
        this.organizer = organizer;
    }

    public TournamentType getTournamentType() {
        return tournamentType;
    }

    public void setTournamentType(TournamentType tournamentType) {
        this.tournamentType = tournamentType;
    }

    public Tournament(String name, Date date, Organizer organizer, TournamentType tournamentType) {

        this.name = name;
        this.date = date;
        this.organizer = organizer;
        this.tournamentType = tournamentType;
    }
}
