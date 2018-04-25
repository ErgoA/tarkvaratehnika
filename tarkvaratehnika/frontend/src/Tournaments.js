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

  reply_click(event) {
    console.log(event.target.getAttribute('id'))
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
                  <a href={"/#/template"} id={dynamicData.id} onClick={this.reply_click}>{dynamicData.name}</a>
                  <a href={"/#/addTeams"}><button type="button" class="btn-lisa">Edit</button></a>

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
