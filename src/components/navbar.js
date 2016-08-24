import React, { Component } from 'react';
import { Link } from 'react-router';
import { signoutUser, getUserObject } from '../actions';
import { connect } from 'react-redux';
import jQuery from 'jquery';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
    };
  }

  componentWillMount() {
    console.log('getting user object');
    this.props.getUserObject();
  }

  componentWillReceiveProps(props) {
    console.log('PROFILE PIC URL NAVBAR', props.user.profilePicURL);
    if (!props.user.profilePicURL) {
      this.setState({
        pic: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      });
    } else {
      jQuery.get(props.user.profilePicURL, (data) => {
        console.log('THIS IS THE DATA', data);
        this.setState({
          pic: data,
        });
      });
    }
  }

  render() {
    return (
      <div className="NavBar">
        <ul className="nav-list">
          <li className="nav-list-element" id="nav-top">
            <Link to="/profile" className="nav-list-link" id="nav-top-link">
              <img src={`${this.state.pic}`} alt="null" className="nav-user-img" />
            </Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-link" to="/snaps">
              <i className="material-icons">chat</i>
            </Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-link" to="/snaps/new">
              <i className="material-icons">add_circle</i>
            </Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-link" to="/friends">
              <i className="material-icons">group</i>
            </Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-link" to="/settings">
              <i className="material-icons">settings</i>
            </Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-link" onClick={this.props.signoutUser} to="/">
              <i className="material-icons">exit_to_app</i>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    snaps: state.snaps.all,
    user: state.user.user,
  };
}

// <li><div id="nav-bottom-title"><h1 id="nav-bottom-text">SnapApp &#9400;</h1></div></li>
export default connect(mapStateToProps, { signoutUser, getUserObject })(NavBar);
