import React, { Component } from "react";
import Parser from 'html-react-parser';
import Tournaments from "./Tournaments";
import './template.css';
import './index.css';
import './Tournaments';
import View from './View';
import ToggleDisplay from 'react-toggle-display';

const tournyAPI = 'http://localhost:8080/api/tournaments/';
const teamAPI = 'http://localhost:8080/api/teams';
const matchAPI = 'http://localhost:8080/api/matches';

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
      matchdata: [],
      matchId: null,
      show: false,
    }
  }

  componentDidUpdate(prevProps) {
      if (prevProps.targetId !== this.props.targetId) {
         fetch(tournyAPI + this.props.targetId)
         .then((Response) => Response.json())
         .then((findresponse) => {
           console.log(findresponse);
         this.setState({
            tournydata:findresponse,
         })
      })
    }
  }

  componentDidMount() {
    fetch(teamAPI)
    .then((teamResponse) => teamResponse.json())
    .then((teamfindresponse) => {
      this.setState({
        groupA:teamfindresponse.slice(0,4),
        groupB:teamfindresponse.slice(4,8),
        groupC:teamfindresponse.slice(8,12),
        team1:teamfindresponse[0].name,
        team2:teamfindresponse[1].name,
        team3:teamfindresponse[2].name,
        team4:teamfindresponse[3].name,
        team5:teamfindresponse[4].name,
        team6:teamfindresponse[5].name,
        team7:teamfindresponse[6].name,
        team8:teamfindresponse[7].name,
      })
    })

    fetch(matchAPI)
    .then((matchResponse) => matchResponse.json())
    .then((matchfindresponse) => {
      this.setState({
        matchdata:matchfindresponse,
      })
    })
  }

  reply_click = id => {
    return () => {
        this.setState({ matchId: id })
    }
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
                            <tr>
                                <td>1</td>
                                <td><a href="http://localhost:8080/api/playersByTeam/83">{this.state.team1}</a></td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="http://localhost:8080/api/playersByTeam/74">{this.state.team2}</a></td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{this.state.team3}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{this.state.team4}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                        </table>

                        <p>Grupp B</p>
                        <table class="center">
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th id="th-1">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{this.state.team5}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{this.state.team6}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{this.state.team7}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{this.state.team8}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
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
                            <tr>
                                <td>1</td>
                                <td>{this.state.team9}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{this.state.team11}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{this.state.team11}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{this.state.team12}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
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
                            <tr>
                                <td>1</td>
                                <td>{this.state.team13}</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{this.state.team14}</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{this.state.team15}</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{this.state.team16}</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">2</td>
                                <td id="th-1">1</td>
                            </tr>
                        </table>
                    </div>

                    <div class="column-center">
                        <h2>Tulemused</h2>
                        <p>Viimased tulemused</p>
                        <div>
                            <table>
                            {
                              this.state.matchdata.map((dynamicData, key) =>
                                <tr>
                                    <td id="td-1">{dynamicData.team1.name}</td>
                                    <td id="td-2"><a href={"/#/View"} onClick={this.reply_click(dynamicData.id)}>{dynamicData.result}</a></td>
                                    <td id="td-3">{dynamicData.team2.name}</td>
                                </tr>
                              )}
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
                <ToggleDisplay show={this.state.show}>
                  <View matchId={this.state.matchId}></View>
                </ToggleDisplay>
            </div>
        );
    }
}

export default template;
