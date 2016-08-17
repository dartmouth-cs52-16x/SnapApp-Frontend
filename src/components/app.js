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
      <div id="full">
        <div id="layout">
          <NavBar />
          {this.props.children}
        </div>
        <div id="content">
        </div>
      </div>
    );
  }
}

export default App;
