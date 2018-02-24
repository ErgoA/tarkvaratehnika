import React, { Component } from "react";

class Tournaments extends Component {
  render() {
    return (
      <div>
        <div class="leftbox">
          <h2>List of live tournaments:</h2><br></br>
          <ul>
            <li><i class="fas fa-trophy"></i>Tourny 4</li>
            <li><i class="fas fa-trophy"></i>Tourny 5</li>
            <li><i class="fas fa-trophy"></i>Tourny 6</li>
          </ul>
        </div>

        <div class="rightbox">
          <h2>List of past tournaments:</h2><br></br>
          <ul>
            <li><i class="fas fa-trophy"></i>Tourny 1</li>
            <li><i class="fas fa-trophy"></i>Tourny 2</li>
            <li><i class="fas fa-trophy"></i>Tourny 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tournaments;
