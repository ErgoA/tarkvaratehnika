import React, { Component } from "react";

class New extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

 addTournament() {
    var name = document.getElementById("tournyName").value;
    var organizer = document.getElementById("tournyOrganizer").value;
    fetch("http://localhost:8080/api/addTournament?name="+name+"&organizer="+organizer);

  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              <form>
                <label for="tournyName">Tournament name:</label>
                <input type="text" class="form-control" id="tournyName"></input>
                <label for="nrOfTeams">Number of participating teams:</label>
                <input type="number" class="form-control" id="nrOfTeams" min="1" max="32"></input>
                <label for="dates">Tournament date:</label>
                <input type="date" class="form-control" id="date"></input>
                <label for="tournyOrganizer">Tournament organizer:</label>
                <input type="text" class="form-control" id="tournyOrganizer"></input>
                <label for="tournyLocation">Tournament location:</label>
                <input type="text" class="form-control" id="tournyLocation"></input>
                <br></br>
                <button type="submit" onClick={this.addTournament} class="btn btn-primary">Create tournament</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
