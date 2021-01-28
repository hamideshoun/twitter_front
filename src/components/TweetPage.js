import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from "../utils/axios_with_token"

import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  constructor(props){
      super(props);
      this.state = {
        tweet: {}
      }
    };

    componentDidMount() {
      get (`/tweets/${this.props.match.params.id}`).then(response =>  {
        let tweet = response.data;
        this.setState({
          tweet
        });
        console.log(tweet)
      });
    }

  render() {
    if (!this.state.tweet.id)
      return <h1>loading...</h1>
    return (
      <div>
        <Tweet tweet={this.state.tweet} />
        {/* passing the parent tweet id */}
        <NewTweet id={this.state.tweet.id} />

        {/* {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map(replyId => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}


export default TweetPage;
