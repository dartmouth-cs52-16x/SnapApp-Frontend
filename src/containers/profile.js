import React, { Component } from 'react';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: 'Placeholder Name',
      username: 'Placeholder Username',
      email: 'Placeholder Email',
      profilePictureURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      snapScore: 71,
      topFriendName: 'Rajiv Ramaiah',
      streak: 23,
      groups: 5,
    };
  }

  render() {
    return (
      <div className="profile-top">
        <div id="profile-header">PROFILE</div>
        <div className="profile">
          <div id="profile-pic">
            <img src={this.state.profilePictureURL} alt="null" className="nav-user-img" />
          </div>
          <h1>{this.state.fullname}</h1>
          <h4>{this.state.username}</h4>
          <div className="list-holder">
            <ul className="profile-ul1">
              <li><i className="material-icons">star</i>  SNAP SCORE <span>{this.state.snapScore}</span></li>
              <li><i className="material-icons">person_pin</i>  TOP FRIEND <span>{this.state.topFriendName}</span></li>
              <li><i className="material-icons">trending_up</i>  LONGEST STREAK <span>{this.state.streak}</span></li>
              <li><i className="material-icons">group</i>  GROUPS <span>{this.state.groups}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
