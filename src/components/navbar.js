import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav-list">
        <li className="nav-list-element" id="nav-top">
          <Link to="/profile" className="nav-list-link" id="nav-top-link">
            <img src={'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'} alt="null" className="nav-user-img" />
          </Link>
        </li>
        <li className="nav-list-element">
          <Link className="nav-list-link" to="/">
            <i className="material-icons">chat</i>
          </Link>
        </li>
        <li className="nav-list-element">
          <Link className="nav-list-link" to="/snaps/new">
            <i className="material-icons">add_circle</i>
          </Link>
        </li>
        <li className="nav-list-element">
          <a className="nav-list-link" href="#">
            <i className="material-icons">group</i>
          </a>
        </li>
        <li className="nav-list-element">
          <Link className="nav-list-link" to="/settings">
            <i className="material-icons">settings</i>
          </Link>
        </li>
        <li className="nav-list-element">
          <Link className="nav-list-link" to="/">
            <i className="material-icons">exit_to_app</i>
          </Link>
        </li>
        <li className="nav-list-element" id="nav-bottom">
          <Link className="nav-list-link" to="" />
        </li>
      </ul>
    </div>
  );
};
// <li><div id="nav-bottom-title"><h1 id="nav-bottom-text">SnapApp &#9400;</h1></div></li>
export default NavBar;
