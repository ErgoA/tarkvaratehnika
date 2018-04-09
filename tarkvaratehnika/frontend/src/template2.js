import React, { Component } from "react";
import Tournaments from "./Tournaments";

const tournyAPI = 'http://localhost:8080/api/tournaments';
const teamAPI = 'http://localhost:8080/api/teams'

class template extends Component {

  constructor() {
    super();
    this.state = {
      tournydata: [],
      groupA: [],
      groupB: [],
      groupC: [],
    }
  }

  componentDidMount() {
    fetch(tournyAPI)
    .then((Response) => Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        tournydata:findresponse.filter(res => res.id === 18),
      })
    })

    fetch(teamAPI)
    .then((teamResponse) => teamResponse.json())
    .then((teamfindresponse) => {
      console.log(teamfindresponse.slice(0,4))
      console.log(teamfindresponse.slice(4,8))
      console.log(teamfindresponse.slice(8,12))
      this.setState({
        groupA:teamfindresponse.slice(0,4),
        groupB:teamfindresponse.slice(4,8),
        groupC:teamfindresponse.slice(8,12),
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
              this.state.tournydata.map((dynamicData, key) =>
              <div>
                <h1>{dynamicData.name}</h1>
              </div>
              )
            }
            GROUP A
            <table>
              <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Draws</th>
                <th>Points</th>
              </tr>
            </table>
            {
              this.state.groupA.map((teamdynamicData, teamkey) =>
              <div>
                <table>
                  <tr>
                    <td>{teamdynamicData.name}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </table>
              </div>
              )
            }
            <br></br>
            GROUP B
            <table>
              <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Draws</th>
                <th>Points</th>
              </tr>
            </table>
            {
              this.state.groupB.map((teamdynamicData, teamkey) =>
              <div>
                <table>
                  <tr>
                    <td>{teamdynamicData.name}</td>
                    <td>5</td>
                    <td>7</td>
                    <td>3</td>
                    <td>0</td>
                  </tr>
                </table>
              </div>
              )
            }
            <br></br>
            Fixtures
            <table>
              <tr>
                <th>Date</th>
                <th>Teams</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>01/01/2018 21:45</td>
                <td><a href="/#/View">Brazil-Italy</a></td>
                <td>0-0</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default template;

