import React, { Component } from "react";

class Fixtures extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              <h2>Fixtures:</h2><br></br>
              <ul>
                <li>Team 1 vs Team 2 <span class="label label-default">FT</span></li>
                <li>Team 3 vs Team 4 <span class="label label-default">FT</span></li>
                <li><a href="http://localhost:3000/#/View">Team 1 vs Team 3 <span class="label label-success">LIVE 1:0</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fixtures;
