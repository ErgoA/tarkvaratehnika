import React, { Component } from "react";

class View extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
            <form>
              <div class="form-group">
                <label for="teamSelect">Select team:</label>
                <select class="form-control" id="teamSelect">
                  <option>Team 1</option>
                  <option>Team 3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="playerSelect">Select player:</label>
                <select class="form-control" id="playerSelect">
                  <option>Player A</option>
                  <option>Player B</option>
                  <option>Player C</option>
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
            <br></br>3' Player A <i class="far fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default View;
