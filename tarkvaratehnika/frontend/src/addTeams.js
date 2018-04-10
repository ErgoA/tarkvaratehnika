import React, { Component } from "react";
import { PanelGroup, Panel} from 'react-bootstrap';
import "./index.css";

const API = 'http://localhost:8080/api/teams';

class addTeams extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      activeKey: '1',
      players: [],
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  componentWillMount() {
    fetch(API)
    .then((Response) => Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        data:findresponse,
      })
    })

    fetch('http://localhost:8080/api/playersByTeam/46')
      .then((playerResponse) => playerResponse.json())
      .then((findplayer) => {
        console.log(findplayer)
        this.setState({
          players:findplayer,
        })
      })
  }

  addTeams() {
     var name = document.getElementById("teamName").value;
     console.log(name);
     fetch("http://localhost:8080/api/addTeam?name="+name);
  }

  addPlayers(key) {
    var playerName = document.getElementById('playerName' + key).value;
    var playerNumber = parseInt(document.getElementById('pnr' + key).value);
  //  var playerName = "jaanus";
  //  var playerNumber = 420;
    var teamId = parseInt(document.getElementById('teamId' + key).value);
    console.log(playerName);
    console.log(playerNumber);
    console.log(teamId);
    fetch("http://localhost:8080/api/addPlayer?name="+playerName+"&number="+playerNumber+"&teamId="+teamId);
 }

  addInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "" + "<input type='text' class='bottomroom' name='playerName'>";
    document.getElementById(divName).appendChild(newdiv);
   }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
            <form>
              <label for="teamName">Team name</label>
              <input type="text" class="form-control" id="teamName"></input>
              <button type="submit" onClick={this.addTeams} class="btn btn-primary">Submit</button>
            </form>
            <br></br>
            Registered teams:
            <br></br>
            {
              this.state.data.map((dynamicData, key) =>
              <div class="black">
              <PanelGroup accordion id="accordion">
                <Panel bsStyle="primary" eventKey="1">
                  <Panel.Heading>
                    <Panel.Title toggle>{dynamicData.name} <i class="fas fa-angle-down"></i></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>Add players</Panel.Body>
                  <Panel.Body collapsible>
                  <div id="dynamicInput">
                    <input type="text" class="bottomroom" placeholder="Player name" id={"playerName"+key}></input>
                    <input type="text" class="bottomroom" placeholder="Player number" id={"pnr"+key}></input>
                    <input type="hidden" class="bottomroom" id={"teamId"+key} value={dynamicData.id}></input>
                    {this.state.players.map((playersData, key) =>
                      <p>{playersData.name}</p>
                    )}
                  </div>
                    <br></br>
                    <button type="submit" onClick={() => this.addPlayers(key)} class="btn btn-success button"><i class="fas fa-check-circle"></i></button>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
              </div>
              )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addTeams;
