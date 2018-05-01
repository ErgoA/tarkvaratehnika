import React, { Component } from "react";

const teamAPI = 'http://localhost:8080/api/teams/'
const playerAPI = 'http://localhost:8080/api/playersByTeam/'
const matchAPI = 'http://localhost:8080/api/match/'
var team1Goals = 0;
var team2Goals = 0;
var scorers = [];

class View extends Component {

  constructor() {
    super();
    this.reply_click = this.reply_click.bind(this);
    this.state = {
      playersData: [],
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.matchId !== this.props.matchId) {
      fetch(matchAPI + newProps.matchId)
      .then((matchResponse) => matchResponse.json())
      .then((matchfindresponse) => {
        console.log(matchfindresponse.team1.name);
        console.log(matchfindresponse);
        this.setState({
          testTeam:matchfindresponse.team1.name,
        })
        localStorage.setItem('team1', matchfindresponse.team1.name);
        localStorage.setItem('team1id', matchfindresponse.team1.id);
        localStorage.setItem('team2', matchfindresponse.team2.name);
        localStorage.setItem('team2id', matchfindresponse.team2.id);
        localStorage.setItem('matchId', matchfindresponse.id);
        localStorage.setItem('score', matchfindresponse.result);
      })
    }
  }

  reply_click() {
    var e = document.getElementById('teamSelection');
    var chosen = e.value;
    console.log(chosen);

    fetch(playerAPI + chosen)
    .then((Response) => Response.json())
    .then((findresponse) => {
      this.setState({
        playersData:findresponse,
      })
    })
  }

  updateScore() {
    var team1 = localStorage.getItem('team1id');
    var team2 = localStorage.getItem('team2id');
    var playerName = document.getElementById('playerSelection').value;
    var teamName = document.getElementById('teamSelection').value;
    var matchId = localStorage.getItem('matchId');
    console.log(teamName);
    if (teamName == team1) {
      team1Goals += 1;
    } else if (teamName == team2) {
      team2Goals += 1;
    }
    var score = team1Goals + ':' + team2Goals;
    scorers.push(playerName);
    console.log(team1 + ' ' + team2 + ' ' + teamName + ' ' + score + ' ' + scorers);
    document.getElementById("scorersTest").innerHTML = scorers[0];
    document.getElementById("liveScore").innerHTML = score;
    fetch('http://localhost:8080/api/updateMatch?matchId=' + matchId + '&result=' + score);
  }

  render() {
    var matchTeam1 = localStorage.getItem('team1');
    var matchTeam1Id = localStorage.getItem('team1id');
    var matchTeam2 = localStorage.getItem('team2');
    var matchTeam2Id = localStorage.getItem('team2id');
    var players = localStorage.getItem('players');
    var matchScore = localStorage.getItem('score');
    var matchId = localStorage.getItem('matchId');

    console.log(matchTeam1 + ' ' + matchTeam2 + ' ' + matchTeam1Id + matchScore + matchId);
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              <form>
                <div class="form-group">
                  <label for="teamSelect">Select team:</label>
                    <select class="form-control" id='teamSelection' onClick={this.reply_click}>
                      <option value={matchTeam1Id}>{matchTeam1}</option>
                      <option value={matchTeam2Id}>{matchTeam2}</option>
                    </select>
                </div>
                <div class="form-group">
                  <label for="playerSelect">Select player:</label>
                  <select class="form-control" id="playerSelection">
                  {
                    this.state.playersData.map((dynamicData, key) =>
                      <option value={dynamicData.name}>{dynamicData.name}</option>
                  )}
                  </select>
                </div>
                <button type="submit" name="yellow" class="btn btn-warning custom">Yellow card</button>
                <button type="submit" name="red" class="btn btn-danger custom">Red card</button><br></br>
                <button type="submit" name="goal" onClick={this.updateScore} class="btn btn-success custom">GOAL</button>
                <button type="submit" name="Assist" class="btn btn-primary custom">Assist</button><br></br>
              </form>
            <br></br>
            Match details<br></br>
            Score: <span id="liveScore"></span>
            <br></br><span id="scorersTest"></span><i class="far fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default View;
