import React, { Component } from 'react';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupname: 'Placeholder Group Name',
      members: 6,
    };
  }

  render() {
    return (
      <div className="groups-top">
        <div id="groups-header">Groups</div>
        <div className="groups">
          <h1>Your Groups</h1>
          <div className="groups-holder-settings">
            <ul className="groups-ul1">
              <li>  GROUP NAME <span>{this.state.groupname}</span></li>
              <li>  MEMBERS <span>{this.state.members}</span></li>
            </ul>
            <div id="groups-change-info">EDIT GROUP</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
