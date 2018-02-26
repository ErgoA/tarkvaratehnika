package model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Denis on 26/02/2018.
 */

@Data
@Entity

public class Organizer {
    private @Id
    @GeneratedValue
    Long id;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Organizer(String name) {

        this.name = name;
    }
}
