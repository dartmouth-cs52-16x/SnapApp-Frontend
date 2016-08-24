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
    console.log('RECEIVED USER', props.user);
    this.setState({
      username: props.user.username,
      friends: props.user.friends,
    });
    if (props.user) {
      for (let i = 0; i < props.user.friends.length; i++) {
        console.log('friend!', props.user.friends[i]);
      }
    }
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
            <h1> asdf </h1>
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
            <input placeholder="Add New Friend" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
          </div>
          <div className="submit-in-sui2">
            <div>
              <a>SUBMIT</a>
            </div>
          </div>
        </div>
        <div>
          {this.renderFriends}
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
