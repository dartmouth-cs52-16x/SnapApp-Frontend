import React, { Component } from 'react';
import { createSnap } from '../actions/index.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class CreateSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureURL: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.imageWasSet = this.imageWasSet.bind(this);
  }

  onSubmit() {
    let pictureURL;
    if (!this.state.pictureURL) {
      pictureURL = 'No Image';
    } else {
      pictureURL = this.state.pictureURL;
    }
    const sentFrom = 'fromUserID';
    const sentTo = 'toUserID';
    this.props.createSnap({ pictureURL, sentFrom, sentTo });
  }

  onCancel() {
    browserHistory.push('/');
  }

  imageWasSet(event) {
    this.setState({
      pictureURL: event.target.value,
    });
  }

  render() {
    return (
      <div className="NewSnap">
        <div id="header">
          <div>Send A Snap!!!</div>
          <button id="cancel" onClick={this.onCancel}>Cancel</button>
        </div>

        <div id="image">
          Upload Image: <input placeholder="Image Here!!!" value={this.state.image} onChange={this.imageWasSet} />
        </div>

        <div id="submit">
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { createSnap })(CreateSnap);
