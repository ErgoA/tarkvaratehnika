import React, { Component } from "react";
import Tournaments from "./Tournaments";
import _ from 'lodash';

const API = 'http://localhost:8080/api/tournaments';

class template extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(API)
    .then((Response) => Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        data:findresponse,
      })
    })
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
            {
              this.state.data.map((dynamicData, key) =>
              <div>
                <h1>{dynamicData.name}</h1>

                <table id="#">
                  <tr>
                    <th>Group A</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    <th>Points</th>
                  </tr>
                  <tr>
                    <th>Group A</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    <th>Points</th>
                  </tr>
                  <tr>
                    <th>Group A</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    <th>Points</th>
                  </tr>
                  <tr>
                    <th>Group A</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                    <th>Points</th>
                  </tr>
                </table>
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


export default template;
