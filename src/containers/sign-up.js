import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      username: '',
    };

    this.emailWasChanged = this.emailWasChanged.bind(this);
    this.usernameWasChanged = this.usernameWasChanged.bind(this);
    this.passwordWasChanged = this.passwordWasChanged.bind(this);
    this.signUserUp = this.signUserUp.bind(this);
  }

  usernameWasChanged(event) {
    this.setState({
      username: event.target.value,
    });
  }

  emailWasChanged(event) {
    this.setState({
      email: event.target.value,
    });
  }

  passwordWasChanged(event) {
    this.setState({
      password: event.target.value,
    });
  }

  signUserUp() {
    this.props.signupUser({
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    });
  }

  render() {
    return (
      <div className="Sign-Up">
        <h1> Sign Up!!! </h1>

        <div id="email">
          <input placeholder="Enter your email" value={this.state.email} onChange={this.emailWasChanged} />
        </div>
        <div id="password">
          <input placeholder="Enter your password" value={this.state.password} onChange={this.passwordWasChanged} />
        </div>
        <div id="username">
          <input placeholder="Enter your username" value={this.state.username} onChange={this.usernameWasChanged} />
        </div>

        <div id="buttons">
          <div id="signup" onClick={this.signUserUp}>
            Sign Up
          </div>
          <div id="cancel">
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(null, { signupUser })(SignUp);
