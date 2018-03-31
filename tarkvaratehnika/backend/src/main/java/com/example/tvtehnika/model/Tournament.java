package com.example.tvtehnika.model;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Tournament {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long Id;
    private String name;
    //private Date date;
    private String Organizer;

    public Tournament(String name, /*Date date,*/ String organizer) {
        this.name = name;
        //this.date = date;
        Organizer = organizer;
    }

    public Tournament() {
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
}
