package model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

/**
 * Created by Denis on 26/02/2018.
 */

@Data
@Entity
public class Team {
    private @Id
    @GeneratedValue
    Long id;
    private String name;

    private String description;
    private List<Player> players;

    private Team() {}

    public Team(String name, String description, List<Player> players) {
        this.name = name;
        this.description = description;
        this.players = players;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
