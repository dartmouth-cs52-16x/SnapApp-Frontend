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
      <div className="settings-top">
        <div id="settings-header">SETTINGS</div>
        <div className="settings">
          <h1>Account Settings</h1>
          <div className="list-holder-settings">
            <ul className="settings-ul1">
              <li>  NAME <span>{this.state.fullname}</span></li>
              <li>  USERNAME <span>{this.state.username}</span></li>
              <li>  PASSWORD <span>&#8226;</span></li>
              <li>  PROFILE PICTURE <span><i className="material-icons">photo</i></span></li>
            </ul>
            <div id="settings-change-info">UPDATE INFO</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
