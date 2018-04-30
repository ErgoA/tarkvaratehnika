import React, { Component } from "react";

const teamAPI = 'http://localhost:8080/api/teams/'
const playerAPI = 'http://localhost:8080/api/playersByTeam/'
const matchAPI = 'http://localhost:8080/api/match/'

class View extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      playersData: [],
      update: [],
      team1: [],
      team2: [],
      matchData: [],
      testTeam: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.matchId !== this.props.matchId) {
      fetch(matchAPI + this.props.matchId)
      .then((matchResponse) => matchResponse.json())
      .then((matchfindresponse) => {
        console.log(matchfindresponse);
        this.setState({
          matchData:matchfindresponse,
          testTeam:matchfindresponse.team1.name,
        })
      })
    }
  }

  componentDidMount() {
    fetch(teamAPI)
    .then((Response) => Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        data:findresponse,
        team1:findresponse[0].name,
        team2:findresponse[1].name,
      })
    })

    fetch(playerAPI + 82)
    .then(playerResponse => playerResponse.json())
    .then(players => {
      console.log(players)
      this.setState({
        playersData:players
      })
    })
  }

  reply_click = id => {
    return () => {
        this.setState({ targetId: id })
    }
  }

  updateScore() {
    fetch('http://localhost:8080/api/updateMatch?matchId=15&result=2:2')
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              <form>
                <div class="form-group">
                  <label for="teamSelect">Select team:</label>
                    <select class="form-control" id='?' onChange={this.reply_click}>
                      <option>{this.state.testTeam}</option>
                      <option>{this.state.team2}</option>
                    </select>
                </div>
                <div class="form-group">
                  <label for="playerSelect">Select player:</label>
                  <select class="form-control" id="playerSelect">
                  {
                    this.state.playersData.map((dynamicData, key) =>
                      <option>{dynamicData.name}</option>
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
            Score: 1:0
            {this.state.matchData}
            <br></br>3'' Player A <i class="far fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default View;
