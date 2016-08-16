import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <div id="Profile">
          Profile
        </div>
      </Link>
      <Link to="/">
        <div id="Create Snap">
          Create Snap
        </div>
      </Link>
      <Link to="/">
        <div id="Settings">
          Settings
        </div>
      </Link>
      <Link to="/">
        <div id="Logout">
          Logout
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
