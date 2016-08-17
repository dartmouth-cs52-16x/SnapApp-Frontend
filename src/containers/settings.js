import React, { Component } from 'react';


class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: 'Placeholder Name',
      username: 'Placeholder Username',
      email: 'Placeholder Email',
      password: 'Placeholder Password',
      profilePictureURL: '',
    };
  }

  render() {
    return (
      <div className="Settings">
        <h1>Settings</h1>
        <hr></hr>
        <div id="UserInfo">
          <div id="name">
            Name: {this.state.fullname}
          </div>
          <div id="username">
            Username: {this.state.username}
          </div>
          <div id="email">
            Email: {this.state.email}
          </div>
          <div id="password">
            Password: {this.state.password}
          </div>
          <button>Edit Info</button>
        </div>

        <hr></hr>

        <div id="Terms">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    );
  }
}

export default Settings;
