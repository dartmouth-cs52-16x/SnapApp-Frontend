import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends React.Component {
    // your various component lifecycle methods
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate() {
      if (!this.nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }
  }

  // mapStateToProps
  const mapStateToProps = (state) => (
  { authenticated: state.auth.authenticated }
);

  return connect(mapStateToProps, null)(RequireAuth);
}
