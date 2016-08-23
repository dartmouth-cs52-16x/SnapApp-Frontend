import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';


class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.usernameWasChanged = this.usernameWasChanged.bind(this);
    this.passwordWasChanged = this.passwordWasChanged.bind(this);
    this.signUserIn = this.signUserIn.bind(this);
  }

  usernameWasChanged(event) {
    this.setState({
      username: event.target.value,
    });
  }

  passwordWasChanged(event) {
    this.setState({
      password: event.target.value,
    });
  }

  signUserIn() {
    this.props.signinUser({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="Sign">
        <div className="sui-inner">
          <h1>SIGN IN</h1>
          <div id="email">
            <input placeholder="Username" value={this.state.username} onChange={this.usernameWasChanged} />
          </div>
          <div id="password">
            <input placeholder="Password" type="password" value={this.state.password} onChange={this.passwordWasChanged} />
          </div>

          <div id="splash-signup" className="submit-in-sui">
            <div>
              <a onClick={this.signUserIn}>SUBMIT</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signinUser })(SignIn);
