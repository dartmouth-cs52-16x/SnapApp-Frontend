import React, { Component } from 'react';
import { createSnap } from '../actions/index.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class CreateSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.imageWasSet = this.imageWasSet.bind(this);
  }

  onSubmit() {
    let image;
    if (!this.state.image) {
      image = 'No Image';
    } else {
      image = this.state.image;
    }
    const sentFrom = 'fromUserID';
    const sentTo = 'toUserID';
    this.props.createSnap({ image, sentFrom, sentTo });
  }

  onCancel() {
    browserHistory.push('/');
  }

  imageWasSet(event) {
    this.setState({
      image: event.target.value,
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
