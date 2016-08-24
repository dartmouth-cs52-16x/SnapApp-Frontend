import React, { Component } from 'react';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: '',
      friend: '',
    };

    this.friendNameWasChanged = this.friendNameWasChanged.bind(this);
  }

  friendNameWasChanged(event) {
    this.setState({
      newFriend: event.target.value,
    });
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
      </div>
    );
  }
 }

export default Friends;
