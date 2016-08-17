import React, { Component } from 'react';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: 'Placeholder Name',
      username: 'Placeholder Username',
      email: 'Placeholder Email',
      profilePictureURL: '',
    };
  }

  render() {
    return (
      <div className="Profile">
        <ul>
          <li>Top Friends</li>
          <li>Snap Score</li>
          <li>Longest Snap Streak</li>
          <li>Groups</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
