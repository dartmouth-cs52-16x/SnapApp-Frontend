import React, { Component } from 'react';
import NavBar from './navbar.js';
import Login from './login.js';
import { connect } from 'react-redux';


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }


  render() {
    console.log(`AUTHENTICATED: ${this.props.authenticated}`);
    if (this.props.authenticaed === false) {
      return (
        <div id="login">
          <Login />
        </div>
      );
    } else {
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
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, null)(App);
