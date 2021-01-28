import React, { Component } from "react";
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
        <NewTweet id={this.state.tweet.id} history={this.props.history} />

        {this.state.tweet.replies2.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {this.state.tweet.replies2.map(reply => (
            <li key={reply.id}>
              <Tweet tweet={reply} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default TweetPage;
