import React, { Component } from 'react';
import { getSnap, deleteSnap } from '../actions/index';
import { connect } from 'react-redux';

class ShowSnap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentWillMount() {
    this.props.getSnap(this.props.params.id);
  }

  componentWillReceiveProps(props) {
    if (props.snap) {
      this.setState({
        title: props.snap.title,
        tags: props.snap.tags,
        content: props.snap.content,
      });
    }
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  snap: state.snaps.snap,
});

export default connect(mapStateToProps, { getSnap, deleteSnap })(ShowSnap);
