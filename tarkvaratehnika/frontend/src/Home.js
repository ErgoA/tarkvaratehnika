import React from "react";
import ReactModalLogin from 'react-modal-login';
import Tournaments from "./Tournaments.js";
import ToggleDisplay from "react-toggle-display";

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };

  }

  render() {
    return (
      <div>
          <Tournaments>
          </Tournaments>
      </div>
    )
  }
}
export default Home;
