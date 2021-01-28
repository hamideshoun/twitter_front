import React, { Component } from "react";
import { formatDate } from "../utils/helpers";

class Activity extends Component {
  render() {
    console.log(this.props);
    const { activity } = this.props;

    return (
      <div>
        <h2>{activity.text}</h2>
        <p>{formatDate(activity.created)}</p>
      </div>
    );
  }
}

export default Activity;
