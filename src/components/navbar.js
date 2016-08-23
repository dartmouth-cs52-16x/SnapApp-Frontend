import React, { Component } from 'react';
import { Link } from 'react-router';
import { signoutUser } from '../actions';
import { connect } from 'react-redux';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePictureURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
    };
  }
  render() {
    return (
      <div className="NavBar">
        <ul className="nav-list">
          <li className="nav-list-element" id="nav-top">
            <Link to="/profile" className="nav-list-link" id="nav-top-link">
              <img src={`${this.state.profilePictureURL}`} alt="null" className="nav-user-img" />
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
  };
}

// <li><div id="nav-bottom-title"><h1 id="nav-bottom-text">SnapApp &#9400;</h1></div></li>
export default connect(mapStateToProps, { signoutUser })(NavBar);
