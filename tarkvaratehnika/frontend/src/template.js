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
      tournydata: [],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
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
                                <td><a href="http://localhost:8080/api/playersByTeam/83">Brasiilia</a></td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="http://localhost:8080/api/playersByTeam/74">Itaalia</a></td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Venemaa</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Eesti</td>
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
                                <th id="th-3">W</th>
                                <th id="th-1">D</th>
                                <th id="th-1">L</th>
                                <th id="th-1">Pts</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Prantsusmaa</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Saksamaa</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ukraina</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Soome</td>
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
                                <td>Argentiina</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Horvaatia</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sloveenia</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Leedu</td>
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
                                <td>Belgia</td>
                                <td id="th-1">3</td>
                                <td id="th-1">0</td>
                                <td id="th-1">0</td>
                                <td id="th-1">9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>USA</td>
                                <td id="th-1">2</td>
                                <td id="th-1">0</td>
                                <td id="th-1">1</td>
                                <td id="th-1">6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hiina</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">1</td>
                                <td id="th-1">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Kreeka</td>
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
                                <tr>
                                    <td id="td-1">Venemaa</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">0-2</a></td>
                                    <td id="td-3">Brasiila</td>
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
                                <tr>
                                    <td id="td-1">Ukraina</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">2-2</a></td>
                                    <td id="td-3">Soome</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Argentiina</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">3-1</a></td>
                                    <td id="td-3">Horvaatia</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Sloveenia</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">0-0</a></td>
                                    <td id="td-3">Leedu</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Belgia</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">3-2</a></td>
                                    <td id="td-3">USA</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Hiina</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">0-0</a></td>
                                    <td id="td-3">Kreeka</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Venemaa</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">1-0</a></td>
                                    <td id="td-3">Itaalia</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Prantsusmaa</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">5-0</a></td>
                                    <td id="td-3">Soome</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Argentiina</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">3-0</a></td>
                                    <td id="td-3">Leedu</td>
                                </tr>
                                <tr>
                                    <td id="td-1">Belgia</td>
                                    <td id="td-2"><a href="http://localhost:3000/#/View">2-1</a></td>
                                    <td id="td-3">Hiina</td>
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