import React, { Component } from "react";
import Template from './template';

const API = 'http://localhost:8080/api/tournaments';

class Tournaments extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
    this.testfun = this.testfun.bind(this);
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

  testfun(e) {
    var target = e.target;
    console.log(target);

    let newClickedData = [];
    newClickedData.push(target);
    this.setState({
       clickedData: newClickedData
    });
  }

  render() {
    return(
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              {
                this.state.data.map((dynamicData, key) =>
                <div>
                  <a href={"/#/addTeams"} onClick={this.testfun}>{dynamicData.name}</a>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tournaments;
