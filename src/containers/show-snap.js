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
      });
      jQuery.get(props.snap.pictureURL, (data) => {
        console.log('THIS IS THE DATA', data);
        this.setState({
          src: data,
        });
        setTimeout(() => {
          this.props.deleteSnap(this.props.params.id);
        }, 10000);
      });
    }
  }

  render() {
    if (this.state.src) {
      return (
        <div id="show-snap-full">
          <div id="show-snap-box">
            <h1>Snap from {this.state.sentFrom}</h1>
            <img role="presentation" src={this.state.src} />
          </div>
          <Timer countDown startTime={10} />
        </div>
      );
    } else {
      return (
        <div id="show-snap-full">
          <div id="show-snap-box">
            <h1>Snap from {this.state.sentFrom}</h1>
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
