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
public class Card {
    private @Id
    @GeneratedValue
    Long id;
    private Player player;
    private Result game;
    private enum type{yellow,red}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Result getGame() {
        return game;
    }

    public void setGame(Result game) {
        this.game = game;
    }

    public Card() {

    }

    public Card(Player player, Result game) {
        this.player = player;
        this.game = game;
    }
}
