import React, { Component } from "react";
import Template from './template';
import ToggleDisplay from "react-toggle-display";

const API = 'http://localhost:8080/api/tournaments';

class Tournaments extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      targetId: null,
      show: false,
    }
  }

  componentDidMount() {
    fetch(API)
    .then((Response) => Response.json())
    .then((findresponse) => {
      this.setState({
        data:findresponse,
      })
    })
  }

  reply_click = id => {
    return () => {
        this.setState({ targetId: id })
    }
  }

  render() {
    return(
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="jumbotron text-center">
              Tournaments:
              {
                this.state.data.map((dynamicData, key) =>
                <div>
                  <a href={"/#/template"} onClick={this.reply_click(dynamicData.id)}>{dynamicData.name}</a>
                  <a href={"/#/addTeams"}><button type="button" class="btn-lisa">Edit</button></a>
                </div>
                )
              }
            </div>
          </div>
        </div>
        <ToggleDisplay show={this.state.show}>
          <Template targetId={this.state.targetId}></Template>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Tournaments;
