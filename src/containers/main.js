import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSnaps } from '../actions';
import Snap from '../components/snap.js';

class Main extends Component {

  componentWillMount() {
    this.props.getSnaps();
  }

  render() {
    let receivedSnaps = 1;
    let snaps = this.props.snaps.map((snap) => {
      receivedSnaps = 0;
      return (
        <Snap fromUser={snap.pictureURL} snapId={snap.id} key={snap.id} />
      );
    });
    if (receivedSnaps === 0) {
      // recieved snaps
      return (
        <div id="recv-snaps">
          <h1 id="recv-snaps-title">NEW SNAPS</h1>
          {snaps}
        </div>
      );
    } else {
      // did not recieve any snaps
      return (
        <div id="recv-snaps">
          <h1 id="recv-snaps-title">NO NEW SNAPS</h1>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    snaps: state.snaps.all,
  };
}

export default connect(mapStateToProps, { getSnaps })(Main);
