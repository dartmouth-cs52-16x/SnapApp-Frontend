import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSnaps } from '../actions';
import Snap from '../components/snap.js';
// import { Link } from 'react-router';

class Main extends Component {

  componentWillMount() {
    console.log('component will mount user', this.props.user);
    this.props.getSnaps('asdf');
  }

  componentWillReceiveProps(props) {
    console.log('component will receive props user', props.user);
    this.props.getSnaps('asdf');
  }

  render() {
    let receivedSnaps = 1;
    let count = 0;
    let snaps = this.props.snaps.map((snap) => {
      receivedSnaps = 0;
      if (count === 0) {
        count = 1;
        return (
          <Snap fromUser={snap.sentFrom} snapId={snap.id} key={snap.id} spec={'first'} />
        );
      } else {
        return (
          <Snap fromUser={snap.sentFrom} snapId={snap.id} key={snap.id} spec={'not-first'} />
        );
      }
    });
    if (receivedSnaps === 0) {
      // recieved snaps
      return (
        <div>
          <h1 id="recv-snaps-title">NEW SNAPS</h1>
          <div id="recv-snaps">
            {snaps}
          </div>
          <div id="recv-snaps-end"></div>
        </div>
      );
    } else {
      // did not recieve any snaps
      return (
        <div>
          <h1 id="recv-snaps-title">NO NEW SNAPS</h1>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    snaps: state.snaps.all,
    user: state.auth.email,
  };
}

export default connect(mapStateToProps, { getSnaps })(Main);
