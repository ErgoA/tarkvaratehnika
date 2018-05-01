package com.example.tvtehnika.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
public class Team {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    private String name;
    private String country;
    private String contactPerson;
    private String contactPhoneNumber;
    private String contactEmail;
    //private String imagePath;
    private String comment;
	@OneToMany(
	    mappedBy="team",
		fetch=FetchType.LAZY,
        cascade = CascadeType.ALL 
    )
	private List<Player> players;

    public Set<Tournament> getTournaments() {
        return tournaments;
    }

    public void setTournaments(Set<Tournament> tournaments) {
        this.tournaments = tournaments;
    }

    @OneToMany(
            mappedBy="team1",
            fetch=FetchType.LAZY,
            cascade = CascadeType.ALL
    )

    private List<Match> team1;
    @OneToMany(
            mappedBy="team2",
            fetch=FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<Match> team2;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "teams")
    @JsonIgnoreProperties("teams")
    private Set<Tournament> tournaments = new HashSet<>();

    public Team(String name, String country, String contactPerson, String contactPhoneNumber, String contactEmail, String comment) {
        this.name = name;
        this.country = country;
        this.contactPerson = contactPerson;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactEmail = contactEmail;
        this.comment = comment;
    }
    public Team(int id, String name, String country, String contactPerson, String contactPhoneNumber, String contactEmail, String comment) {
		this.Id=id;
        this.name = name;
        this.country = country;
        this.contactPerson = contactPerson;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactEmail = contactEmail;
        this.comment = comment;
    }

    public Team() {
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

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getContactPhoneNumber() {
        return contactPhoneNumber;
    }

    public void setContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
