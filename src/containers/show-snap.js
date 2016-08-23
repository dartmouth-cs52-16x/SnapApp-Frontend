import React, { Component } from 'react';
import { getSnap, deleteSnap } from '../actions/index';
import { connect } from 'react-redux';
import Timer from 'react.timer';
import jQuery from 'jquery';


class ShowSnap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sentFrom: '',
      sentTo: '',
      src: null,
      timer: 5,
    };
  }


  componentWillMount() {
    this.props.getSnap(this.props.params.id);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.deleteSnap(this.props.params.id);
  //   }, 10000);
  // }

  componentWillReceiveProps(props) {
    console.log('\n\nSNAP PROPS', props.snap);
    if (props.snap) {
      this.setState({
        sentFrom: props.snap.sentFrom,
        sentTo: props.snap.sentTo,
        timer: props.snap.timer,
      });
      jQuery.get(props.snap.pictureURL, (data) => {
        console.log('THIS IS THE DATA', data);
        this.setState({
          src: data,
        });
        setTimeout(() => {
          this.props.deleteSnap(this.props.params.id);
        }, this.state.timer * 1000);
      });
    }
  }

  render() {
    if (this.state.src) {
      return (
        <div id="show-snap-full">
          <div id="profile-header">NEW SNAP FROM {this.state.sentFrom}</div>
          <div id="show-snap-box">
            <img role="presentation" src={this.state.src} />
          </div>
          <div id="timer-div">
            <i className="material-icons">timer</i><Timer countDown startTime={this.state.timer} />
          </div>
        </div>
      );
    } else {
      return (
        <div id="show-snap-full">
          <div id="profile-header">NEW SNAP FROM {this.state.sentFrom}</div>
          <div id="show-snap-box">
            <h2> LOADING... </h2>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  snap: state.snaps.snap,
});

export default connect(mapStateToProps, { getSnap, deleteSnap })(ShowSnap);
