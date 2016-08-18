import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSnap } from '../actions/index';


class ShowSnap extends Component {
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

  componentWillReceiveProps(props) {
    if (props.snap) {
      this.setState({
        pictureURL: props.snap.pictureURL,
        sentFrom: props.snap.sentFrom,
        sentTo: props.snap.sentTo,
      });
    }
    console.log(`props: ${this.props}`);
    console.log(`state: ${this.state}`);
  }

  render() {
    console.log(`props: ${this.props.snap}`);
    console.log(`state: ${this.state}`);
    return (
      <h1>Snap goes here: {this.state.pictureURL}</h1>
    );
  }
}

const mapStateToProps = (state) => (
  {
    snap: state.snaps.snap,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { getSnap })(ShowSnap);
