import React, { Component } from "react";

class View extends Component {
  render() {
    return (
      <div class="row">
        <div class="columnleft">
          <select name="teamname">
            <option value="Teamname">Teamname</option>
          </select><br></br>
          <select name="playername">
            <option value="Playername">Playername</option>
          </select><br></br>
        </div>
        <div class="columnright">
          <button type="submit" name="yellow">Yellow card</button><br></br>
          <button type="submit" name="red">Red card</button><br></br>
          <button type="submit" name="goal"><i class="fas fa-futbol"></i>GOALSCORER</button><br></br>
          <button type="submit" name="Assist">Assist</button><br></br>
        </div>
      </div>
    );
  }
}

export default View;
