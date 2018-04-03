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
  }

  addTeams() {
     var name = document.getElementById("teamName").value;
     console.log(name);
     fetch("http://localhost:8080/api/addTeam?name="+name);
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
                    <input type="text" class="bottomroom"></input>
                    <input type="text" class="bottomroom"></input>
                    <input type="text" class="bottomroom"></input>
                    <input type="text" class="bottomroom"></input>
                    <input type="text" class="bottomroom"></input>
                  </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary button" value="Add more players"
                    onClick= { () => this.addInput('dynamicInput')}><i class="fas fa-plus"></i></button>
                    <button type="submit" class="btn btn-success button"><i class="fas fa-check-circle"></i></button>
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
