import React from 'react';
import { Link } from 'react-router';

const Snap = (props) => {
  return (
    <Link to={`snaps/${props.snapId}`}>
      <div className="Snap">
        <div id="fromUser">
          Snap received from {props.fromUser}
        </div>
      </div>
    </Link>
  );
};

export default Snap;
