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
<<<<<<< HEAD
      <div id="full">
=======
      <div className="Root">
        <Link to="/">
          <div id="logo">
            <h1>Snap App</h1>
          </div>
        </Link>
>>>>>>> e444a8c3a71fee3c870629e2ff551073751d8e7a
        <div id="layout">
          <NavBar />
          {this.props.children}
        </div>
<<<<<<< HEAD
        <div id="content">
          <h1>Snap App</h1>
        </div>
=======
>>>>>>> e444a8c3a71fee3c870629e2ff551073751d8e7a
      </div>
    );
  }
}

export default App;
