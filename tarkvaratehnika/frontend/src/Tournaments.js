import React, { Component } from "react";

const API = 'http://localhost:8080/api/tournaments';

class Tournaments extends Component {

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
    return(
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              {
                this.state.data.map((dynamicData, key) =>
                <div>
                  <a href={"/#/" + dynamicData.name}>{dynamicData.name}</a>
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
