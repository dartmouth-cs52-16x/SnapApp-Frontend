import React, { Component } from 'react';
import { getSnap, deleteSnap } from '../actions/index';
import { connect } from 'react-redux';
import Timer from 'react.timer';
import Timers from 'react-timers';

class ShowSnap extends Component {
  mixins: [Timers]

  constructor(props) {
    super(props);

    this.state = {
      pictureURL: '',
      sentFrom: '',
      sentTo: '',
    };
  }


  componentWillMount() {
    this.props.getSnap(this.props.params.id);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.deleteSnap(this.props.params.id);
    }, 10000);
  }

  componentWillReceiveProps(props) {
    if (props.snap) {
      this.setState({
        pictureURL: props.snap.pictureURL,
        sentFrom: props.snap.sentFrom,
        sentTo: props.snap.sentTo,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.pictureURL}</h1>
        <Timer countDown startTime={10} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  snap: state.snaps.snap,
});

export default connect(mapStateToProps, { getSnap, deleteSnap })(ShowSnap);
