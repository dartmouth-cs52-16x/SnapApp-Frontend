import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserObject } from '../actions';


class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: '',
      username: '',
      friends: [],
    };

    this.friendNameWasChanged = this.friendNameWasChanged.bind(this);
    this.renderFriends = this.renderFriends.bind(this);
  }

  componentWillMount() {
    console.log('getting user object');
    this.props.getUserObject();
  }

  componentWillReceiveProps(props) {
    this.setState({
      username: props.user.username,
      friends: props.user.friends,
    });
  }


  friendNameWasChanged(event) {
    this.setState({
      newFriend: event.target.value,
    });
  }

  renderFriends() {
    if (this.state.friends) {
      this.state.friends.map(user => {
        console.log('friend received');
        console.log(user.name);
        console.log('yay');
        return (
          <div>
            <h1> {user.name} </h1>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="Friends">
        <div className="sui-inner">
          <h1>Friends</h1>
          <div>
            <input placeholder="Search for New Friend" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
          </div>
          <div className="submit-in-sui2">
            <div>
              <a>SUBMIT</a>
            </div>
          </div>
        </div>
        <div>
          {this.renderFriends()}
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


export default connect(mapStateToProps, { getUserObject })(Friends);
