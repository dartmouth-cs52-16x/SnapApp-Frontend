import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserObject } from '../actions';

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
    // add friend to database here
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
        <div key={friend._id} className="single-friend-full">
          <div id="sff-icon"><i className="material-icons">person</i></div>
          <p>{friend.name}</p>
          <p id="jfr">{friend.score}<i className="material-icons">star</i></p>
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
            <h1>Friends List</h1>
            <div id="FriendList">
              {friendsAll}
            </div>
            <h1 id="bbt">Add New Friends</h1>
            <div>
              <input placeholder="Username" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
            </div>
            <div id="friends-add" className="submit-in-friends">
              <div>
                <a onClick={this.addFriend}><i id="afi" className="material-icons">person_add</i></a>
              </div>
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
            <h1>Friends List</h1>
            <div id="FriendList" className="tam">
              You currently have no friends :/
            </div>
            <h1 id="bbt">Add New Friends</h1>
            <div>
              <input placeholder="Username" value={this.state.newFriend} onChange={this.friendNameWasChanged} />
            </div>
            <div id="friends-add" className="submit-in-friends">
              <div>
                <a onClick={this.addFriend}><i id="afi" className="material-icons">person_add</i></a>
              </div>
            </div>
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


export default connect(mapStateToProps, { getUserObject })(Friends);
