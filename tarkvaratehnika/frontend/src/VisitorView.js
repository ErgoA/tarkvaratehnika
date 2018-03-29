import React, { Component } from "react";

class VisitorView extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
            <h1>Match details</h1><br></br>
            <h2>Team 1 VS Team 3</h2><br></br>
            <p>Score: 1:0</p>
            <br></br>3' Player A <i class="far fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default VisitorView;
