import React, { Component } from "react";

const teamAPI = 'http://localhost:8080/api/teams'
const playerAPI = 'http://localhost:8080/api/playersByTeam/69'

class View extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      playersData: [],
      update: [],
    };
  }

  componentDidMount() {
    fetch(teamAPI)
    .then((Response) => Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        data:findresponse,
      })
    })

    fetch('http://localhost:8080/api/playersByTeam/' + 70)
    .then(playerResponse => playerResponse.json())
    .then(players => {
      console.log(players)
      this.setState({
        playersData:players
      })
    })
  }

  reply_click(event) {
    var targetID = event.target.getAttribute('id')
    console.log(targetID)
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
                  {
                    this.state.data.map((dynamicData, key) =>
                      <select class="form-control" id='69' onChange={this.reply_click}>
                        <option id='1'>{dynamicData.name}</option>
                      </select>
                  )}
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
                <button type="submit" name="goal" class="btn btn-success custom">GOAL</button>
                <button type="submit" name="Assist" class="btn btn-primary custom">Assist</button><br></br>
              </form>
            <br></br>
            Match details<br></br>
            Score: 1:0
            <br></br>3'' Player A <i class="far fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default View;
