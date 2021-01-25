import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from "./Activity";

class ActivityPage extends Component{
    render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Activity</h3>
        <ul className="dashbord-list">
          {this.props.tweetsIds.map(id => (
            <li key={id}>
              {/* <div>TWEET ID: {id} </div> */}
              <Activity id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect()(ActivityPage);