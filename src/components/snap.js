import React from 'react';
import { Link } from 'react-router';

const Snap = (props) => {
  return (
    <div className="home-snap-full">
      <div id="snap-circle">
        <i className="material-icons">drafts</i>
      </div>
      <Link to={`snaps/${props.snapId}`}>
        <div className="Snap">
          <div id="fromUser">
            Snap received from {props.fromUser}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Snap;
