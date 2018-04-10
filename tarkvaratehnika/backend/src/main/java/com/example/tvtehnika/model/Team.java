package com.example.tvtehnika.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Collection;

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
        /*,orphanRemoval = true*/
    )
	private List<Player> players;
    //private List<Player> players=new ArrayList<>();
	
	/*
	public void addPlayer(Player player){
	    players.add(player);
	    player.setTeam(this);
    }

    public void removePlayer(Player player){
	    players.remove(player);
	    player.setTeam(null);
    }
	*/

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
	/*
    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
	*/
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