import React, { Component } from 'react';
import { getUserObject } from '../actions';
import { connect } from 'react-redux';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      username: '',
      email: '',
      profilePictureURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      snapScore: 71,
      topFriendName: 'None',
      streak: 23,
      groups: 5,
    };
  }

  componentWillMount() {
    console.log('getting user object');
    this.props.getUserObject();
  }

  componentWillReceiveProps(props) {
    console.log('PROPS friend ', props.user);
    let max = 0;
    let topFriend;
    if (props.user.friends.length > 0) {
      for (let i = 0; i < props.user.friends.length; i++) {
        if (props.user.friends[i].score > max) {
          max = props.user.friends[i].score;
          topFriend = props.user.friends[i].name;
        }
      }
    } else {
      topFriend = 'No Friends';
    }
    this.setState({
      topFriendName: topFriend,
    });
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="profile-top">
        <div id="profile-header">PROFILE</div>
        <div className="profile">
          <div id="profile-pic">
            <img src={this.state.profilePictureURL} alt="null" className="nav-user-img" />
          </div>
          <h1>{this.props.user.username}</h1>
          <h4>{this.props.user.email}</h4>
          <div className="list-holder">
            <ul className="profile-ul1">
              <li><i className="material-icons">star</i> SNAP SCORE <span id="fl">{this.props.user.snapScore}</span></li>
              <li><i className="material-icons">person_pin</i> TOP FRIEND <span id="fl">{this.props.user.topFriend}</span></li>
              <li><i className="material-icons">group</i> GROUPS <span id="fl">{this.state.groups}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default connect(mapStateToProps, { getUserObject })(Profile);
