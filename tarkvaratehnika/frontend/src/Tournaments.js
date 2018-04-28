import React, { Component } from "react";
import Template from './template';

const API = 'http://localhost:8080/api/tournaments';

class Tournaments extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      targetId: null,
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
              {
                this.state.data.map((dynamicData, key) =>
                <div>
                  <a href={"/#/template"} onClick={this.reply_click(dynamicData.id)}>{dynamicData.name}</a>
                  <a href={"/#/addTeams"}><button type="button" class="btn-lisa">Edit</button></a>
                </div>
                )
              }
              {this.state.targetId ? <Template targetId={this.state.targetId}></Template> : null }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tournaments;
