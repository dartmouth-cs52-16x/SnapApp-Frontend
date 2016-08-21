import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.emailWasChanged = this.emailWasChanged.bind(this);
    this.passwordWasChanged = this.passwordWasChanged.bind(this);
    this.signUserIn = this.signUserIn.bind(this);
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

  signUserIn() {
    this.props.signinUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="Sign-In">
        <h1> Sign In! </h1>
        <div id="email">
          <input placeholder="Enter your email" value={this.state.email} onChange={this.emailWasChanged} />
        </div>
        <div id="password">
          <input placeholder="Enter your password" value={this.state.password} onChange={this.passwordWasChanged} />
        </div>

        <div id="buttons">
          <div id="signin" onClick={this.signUserIn}>
            Sign In
          </div>
          <div id="cancel">
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signinUser })(SignIn);
