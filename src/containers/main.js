import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSnaps } from '../actions';
import Snap from '../components/snap.js';

class Main extends Component {

  componentWillMount() {
    this.props.getSnaps();
  }

  render() {
    let snaps = this.props.snaps.map((snap) => {
      return (
        <Snap fromUser={snap.pictureURL} snapId={snap.id} key={snap.id} />
      );
    });
    return (
      <div>
        {snaps}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    snaps: state.snaps.all,
  };
}

export default connect(mapStateToProps, { getSnaps })(Main);
