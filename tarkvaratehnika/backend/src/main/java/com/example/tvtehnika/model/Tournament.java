package com.example.tvtehnika.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tournament {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    private String name;
    private String Organizer;
    private String info;

    //private List<Team> teams;

    /*
    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
*/
    //private Date date;

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

    /*
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    */
    public String getOrganizer() {
        return Organizer;
    }

    public void setOrganizer(String organizer) {
        Organizer = organizer;
    }


    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
