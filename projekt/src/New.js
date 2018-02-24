import React, { Component } from "react";

class New extends Component {
  render() {
    return (
      <div class="jumbotron">
        <div class="centertext">
          <form action="#">
            <p>Tournament name</p>
            <input type="text" name="name" size="15"></input><br></br>
            <p>Tournament dates</p>
            <input type="date" name="date" size="15"></input><br></br>
            <p>Tournament organizer</p>
            <input type="text" name="organizer" size="15"></input><br></br>
            <p>Tournament type</p>
            <select name="tournamentType">
              <option value="Group + eli">Group + elimination</option>
              <option value="single elimination">Single elimination</option>
              <option value="etc">Etc</option>
            </select><br></br>
          </form>
          <br></br>
          <h2><button type="submit">Create</button></h2>
        </div>
      </div>
    );
  }
}

export default New;
