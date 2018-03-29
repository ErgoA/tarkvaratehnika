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
import Fixtures from "./Fixtures";
import VisitorView from "./VisitorView";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/New">New tournament</NavLink></li>
            <li><NavLink to="/Tournaments">Tournaments</NavLink></li>
            <li><NavLink to="/Fixtures">Fixtures</NavLink></li>
            <li><NavLink to="/View">EditorView</NavLink></li>
            <li><NavLink to="/VisitorView">VisitorView</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/New" component={New}/>
            <Route path="/Tournaments" component={Tournaments}/>
            <Route path="/Fixtures" component={Fixtures}/>
            <Route path="/View" component={View}/>
            <Route path="/VisitorView" component={VisitorView}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
