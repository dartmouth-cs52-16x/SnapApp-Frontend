import React, { Component } from 'react';
import { getSnap, deleteSnap } from '../actions/index';
import { connect } from 'react-redux';
import Timer from 'react.timer';
import Timers from 'react-timers';
import jQuery from 'jquery';

class ShowSnap extends Component {
  mixins: [Timers]

  constructor(props) {
    super(props);

    this.state = {
      sentFrom: '',
      sentTo: '',
      src: '',
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
        sentFrom: props.snap.sentFrom,
        sentTo: props.snap.sentTo,
      });
      jQuery.get(props.snap.pictureURL, (data) => {
        console.log('THIS IS THE DAT', data);
        this.setState({
          src: data,
        });
      });
    }
  }

  render() {
    return (
      <div id="show-snap-full">
        <div id="show-snap-box">
          <h1>Snap from {this.state.sentFrom}</h1>
          <img role="presentation" src={this.state.src} />
        </div>
        <Timer countDown startTime={4} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  snap: state.snaps.snap,
});

export default connect(mapStateToProps, { getSnap, deleteSnap })(ShowSnap);
