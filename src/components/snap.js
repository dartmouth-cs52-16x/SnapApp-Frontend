import React from 'react';
import { Link } from 'react-router';
import Time from 'react-time';

const Snap = (props) => {
  let now = new Date();
  // id="home-snap-first"
  if (props.spec === 'first') {
    return (
      <div className="home-snap-full" id="home-snap-first">
        <Link to={`snaps/${props.snapId}`}>
          <div id="snap-circle">
            <i className="material-icons" id="home-snap-icon-no-hover">drafts</i>
            <i className="material-icons md-36" id="home-snap-icon-hover">drafts</i>
          </div>
        </Link>
        <div className="home-snap-link-div">
          <p id="home-snap-p1">Received from {props.fromUser}</p>
          <p><Time value={now} format="HH:mm" /> PM</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-snap-full">
        <Link to={`snaps/${props.snapId}`}>
          <div id="snap-circle">
            <i className="material-icons" id="home-snap-icon-no-hover">drafts</i>
            <i className="material-icons md-36" id="home-snap-icon-hover">drafts</i>
          </div>
        </Link>
        <div className="home-snap-link-div">
          <p id="home-snap-p1">Received from {props.fromUser}</p>
          <p><Time value={now} format="HH:mm" /> PM</p>
        </div>
      </div>
    );
  }
};

export default Snap;
