import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from "./Activity";


class ActivityPage extends Component{

    render(){
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Activity</h3>
        <ul className="dashbord-list">
          {this.props.activityId.map(id => (
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

function mapStateToProps(reduxState) {
  const activities = reduxState.activities
  return {
    activityId: Object.keys(activities).sort(
      //sorting from the newest to the oldest tweet
      //If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
      (a, b) => activities[b].timestamp - activities[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(ActivityPage);