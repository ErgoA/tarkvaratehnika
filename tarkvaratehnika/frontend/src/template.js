import React, { Component } from "react";
import Tournaments from "./Tournaments";
import './template.css';
import './index.css';

const tournyAPI = 'http://localhost:8080/api/tournaments';
const teamAPI = 'http://localhost:8080/api/teams'

class template extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      tournydata: [],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      team1: [],
      team2: [],
      team3: [],
      team4: [],
      team5: [],
      team6: [],
      team7: [],
      team8: [],
      team9: [],
      team10: [],
      team11: [],
      team12: [],
      team13: [],
      team14: [],
      team15: [],
      team16: [],
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
        team1:teamfindresponse.slice(0,1),
        team2:teamfindresponse.slice(1,2),
        team3:teamfindresponse.slice(2,3),
        team4:teamfindresponse.slice(3,4),
        team5:teamfindresponse.slice(4,5),
        team6:teamfindresponse.slice(5,6),
        team7:teamfindresponse.slice(6,7),
        team8:teamfindresponse.slice(7,8),
        team9:teamfindresponse.slice(8,9),
        team10:teamfindresponse.slice(9,10),
        team11:teamfindresponse.slice(10,11),
        team12:teamfindresponse.slice(11,12),
        team13:teamfindresponse.slice(12,13),
        team14:teamfindresponse.slice(13,14),
        team15:teamfindresponse.slice(14,15),
        team16:teamfindresponse.slice(15,16),
      })
    })
  }

  render() {
        return (
            <div class="content">
                <div class="col-container">
                    <div class="column-left">
                            <h2>Alagrupid</h2>
                            <p>Grupp A</p>

                        <table class="center">
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th id="th-1">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            {
                              this.state.team1.map((dynamicData, key) =>
                            <tr>
                                <td>1</td>
                                <td><a href="http://localhost:8080/api/playersByTeam/83">{dynamicData.name}</a></td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            )}
                            {
                              this.state.team2.map((dynamicData, key) =>
                            <tr>
                                <td>2</td>
                                <td><a href="http://localhost:8080/api/playersByTeam/74">{dynamicData.name}</a></td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            )}
                            {
                              this.state.team3.map((dynamicData, key) =>
                            <tr>
                                <td>3</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            )}
                            {
                              this.state.team4.map((dynamicData, key) =>
                            <tr>
                                <td>4</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                            )}
                        </table>

                        <p>Grupp B</p>
                        <table class="center">
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th id="th-3">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            {
                              this.state.team5.map((dynamicData, key) =>
                            <tr>
                                <td>1</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            )}
                            {
                              this.state.team6.map((dynamicData, key) =>
                            <tr>
                                <td>2</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            )}
                            {
                              this.state.team7.map((dynamicData, key) =>
                            <tr>
                                <td>3</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            )}
                            {
                              this.state.team8.map((dynamicData, key) =>
                            <tr>
                                <td>4</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                            )}
                        </table>

                        <p>Grupp C</p>
                        <table class="center">
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th id="th-1">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            {
                              this.state.team9.map((dynamicData, key) =>
                            <tr>
                                <td>1</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            )}
                            {
                              this.state.team10.map((dynamicData, key) =>
                            <tr>
                                <td>2</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            )}
                            {
                              this.state.team11.map((dynamicData, key) =>
                            <tr>
                                <td>3</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            )}
                            {
                              this.state.team12.map((dynamicData, key) =>
                            <tr>
                                <td>4</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                            )}
                        </table>

                        <p>Grupp D</p>
                        <table class="center">
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th id="th-1">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            {
                              this.state.team13.map((dynamicData, key) =>
                            <tr>
                                <td>1</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            )}
                            {
                              this.state.team14.map((dynamicData, key) =>
                            <tr>
                                <td>2</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            )}
                            {
                              this.state.team15.map((dynamicData, key) =>
                            <tr>
                                <td>3</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            )}
                            {
                              this.state.team16.map((dynamicData, key) =>
                            <tr>
                                <td>4</td>
                                <td>{dynamicData.name}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                            )}
                        </table>
                    </div>

                    <div class="column-center">
                        <h2>Tulemused</h2>
                        <p>Viimased tulemused</p>
                        <div>
                            <table>
                                <tr>
                                    <td id="td-1">hjhgjg</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">0-2</a></td>
                                    <td id="td-3">hkjh</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Itaalia</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">7-0</a></td>
                                    <td id="td-3">Eesti</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Prantsusmaa</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">1-0</a></td>
                                    <td id="td-3">Saksamaa</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="column-right">
                        <h2>Statistika</h2>
                        <p>Mängijate statistika</p>
                        <div class="stats">
                            <div class="tab">
                                <button class="tablinks" onclick="openStats(event, 'Väravad')" id="defaultOpen">Väravad</button>
                                <button class="tablinks" onclick="openStats(event, 'Söödud')">Söödud</button>
                                <button class="tablinks" onclick="openStats(event, 'Kaardid')">Kaardid</button>
                            </div>

                            <div id="Väravad" class="tabcontent">
                                <h2>Väravad</h2>
                                <p>Nimekiri...</p>
                            </div>

                            <div id="Söödud" class="tabcontent">
                                <h2>Söödud</h2>
                                <p>Nimekiri...</p>
                            </div>

                            <div id="Kaardid" class="tabcontent">
                                <h2>Kaardid</h2>
                                <p>Nimekiri...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default template;
