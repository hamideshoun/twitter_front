import React, { Component } from "react";
import { connect } from "react-redux";
import { formatActivity } from "../utils/helpers";
import { withRouter } from "react-router-dom";

class Activity extends Component {
  render() {
    console.log(this.props);
    const { activity } = this.props;

    const {
      type,
      name,
      timestamp,
      text,
      id,
    } = activity;

    return (
      <p>hello</p>
    );
  }
}

//id comes from the props passed by a parent component
function mapStateToProps({ authedUser, activities }, { id }) {
  const activity = activities[id]; //getting the specific tweet by its id

  return {
    authedUser,
    activity: activity //making sure a activity exists
      ? formatActivity(activity)
      : null
  };
}

//using withRouter because this component is not being rendered by react router, so to have access to history props, we need to use withRouter
export default withRouter(connect(mapStateToProps)(Activity));
