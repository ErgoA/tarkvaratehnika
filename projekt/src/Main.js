import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Tournaments from "./Tournaments";
import View from "./View";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/New">New tournament</NavLink></li>
            <li><NavLink to="/Tournaments">Tournaments</NavLink></li>
            <li><NavLink to="/View">View</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/New" component={New}/>
            <Route path="/Tournaments" component={Tournaments}/>
            <Route path="/View" component={View}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
