import React, { Component } from "react";
import { get } from "./../utils/axios_with_token"

import Tweet from "./Tweet";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }
  componentDidMount(){
    get(`/tweets/`).then(response => {
      let tweets = response.data;
      this.setState({tweets});
    }).catch(err => {
      alert(err);
    })
  }
  render() {
    if (!this.state.tweets)
      return <h1>Loading</h1>
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashbord-list">
          {this.state.tweets.map(tweet => (
            <li key={tweet}>
              <Tweet tweet={tweet} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
