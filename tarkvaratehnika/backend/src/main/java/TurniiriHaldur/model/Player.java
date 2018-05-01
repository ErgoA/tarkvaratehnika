package TurniiriHaldur.model;

import javax.persistence.*;

@Entity(name="player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String name;
	private int number;
    //private enum position {Goalkeeper,Defender,Midfield,Forward};
	@ManyToOne(fetch=FetchType.LAZY)
    private Team team;
	
    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Player() {
    }

    public Player(String name, /*Team team,*/ int number) {
        this.name = name;
        /*this.team = team;*/
        this.number = number;
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

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
