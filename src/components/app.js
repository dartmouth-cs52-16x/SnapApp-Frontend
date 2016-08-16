import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.js';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div className="Root">
        <Link to="/">
          <div id="logo">
            <h1>Snap App</h1>
          </div>
        </Link>
        <div id="layout">
          <NavBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
