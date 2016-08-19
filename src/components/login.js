import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser, signupUser } from '../actions/index';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      userName: '',
      userPass: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  onEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  onUsernameChange(event) {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  }


  onPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ userPass: event.target.value });
  }

  onSignInClick(event) {
    this.props.signinUser({ email: this.state.email, password: this.state.userPass });
  }

  onSignUpClick(event) {
    this.props.signupUser({ email: this.state.email, username: this.state.userName, password: this.state.userPass });
  }

  render() {
    return (
      <div id="login-form">
        <input onChange={this.onEmailChange} value={this.state.email} placeholder="Email" />
        <input onChange={this.onUsernameChange} value={this.state.userName} placeholder="Username" />
        <input onChange={this.onPasswordChange} value={this.state.userPass} placeholder="Password" />
        <button onClick={this.onSignInClick}>Sign In</button>
        <button onClick={this.onSignUpClick}>Sign Up</button>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinUser, signupUser })(Login);
