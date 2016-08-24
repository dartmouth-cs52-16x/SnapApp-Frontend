import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserObject, addFriendToUser } from '../actions';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: '',
      friends: [],
    };

    this.friendNameWasChanged = this.friendNameWasChanged.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  componentWillMount() {
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
    console.log('CURRENT STAE', this.state);
  }

  addFriend() {
    const newArray = this.state.friends.slice();
    newArray.push({ name: this.state.newFriend, score: 69 });
    this.setState({ friends: newArray });
    this.props.addFriendToUser({ friends: this.state.friends });
  }


  friendNameWasChanged(event) {
    this.setState({
      newFriend: event.target.value,
    });
  }

  render() {
    let receivedFriends = 1;
    let friendsAll = this.state.friends.map((friend) => {
      console.log('mapping');
      receivedFriends = 0;
      return (
        <div key={friend._id} className="home-snap-full" id="home-snap-first">
          Name: {friend.name}
          Score: {friend.score}
        </div>
      );
    });
      /* receivedFriends = 0;
      return (
        <Friend name={friend.name} score={friend.score} />
      );
    });*/
    if (receivedFriends === 0) {
      // did recieve friends
      return (
        <div className="Friends">
          <div id="show-snap-header">FRIENDS</div>
          <div className="friends-inner">
            <h1>Add A New Friend</h1>
            <div>
              <input placeholder="Username" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
            </div>
            <div className="submit-in-friends">
              <div>
                <a onClick={this.addFriend}>SUBMIT</a>
              </div>
            </div>
            <div id="FriendList">
              {friendsAll}
            </div>
          </div>
        </div>
      );
    } else {
      // did not reieve friends
      return (
        <div className="Friends">
          <div id="show-snap-header">FRIENDS</div>
          <div className="friends-inner">
            <h1>Add A New Friend</h1>
            <div>
              <input placeholder="Username" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
            </div>
            <div className="submit-in-sui3">
              <div>
                <a onClick={this.addFriend}>SUBMIT</a>
              </div>
            </div>
          </div>
          <div>
            You currently have no friends. Add some above!
          </div>
        </div>
      );
    }
  }
 }

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}


export default connect(mapStateToProps, { getUserObject, addFriendToUser })(Friends);
