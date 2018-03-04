import React, { Component } from "react";

class Tournaments extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              <h2>List of tournaments:</h2><br></br>
              <ul>
                <li><i class="fas fa-trophy"></i><a href="http://localhost:3000/#/Fixtures">Tournament 1</a></li>
                <li><i class="fas fa-trophy"></i>Tournament 2</li>
                <li><i class="fas fa-trophy"></i>Tournament 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tournaments;
