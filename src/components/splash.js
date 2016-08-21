import React, { Component } from 'react';
import { Link } from 'react-router';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Link to="/signin" className="SignIn">
          SignIn
        </Link>
        <Link to="/signup" className="SignUp">
          SignUp
        </Link>
      </div>
    );
  }
}
// <li><div id="nav-bottom-title"><h1 id="nav-bottom-text">SnapApp &#9400;</h1></div></li>
export default Splash;
