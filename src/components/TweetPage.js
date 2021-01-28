import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import { withRouter } from "react-router-dom";
class TweetPage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { id, replies, tweets } = this.props;

    return (
      <div>
        <Tweet id={id} />
        {/* passing the parent tweet id */}
        <NewTweet id={id} history={this.props.history} />

        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map(replyId => (
            <li key={replyId}>
              <Tweet id={replyId} />
              {/* <p>{tweets[replyId]}</p> */}
            </li>
          ))}
        </ul>
      </div> 
    );
  }
}

function mapStateToProps({tweets}, props) {
  if (tweets === undefined) {
    this.props.history.push("/")
  }
  let id = props.match.params.id
  return {
    id,
    replies: !!!tweets[id] 
      ? [] //if doesn't exist a tweet with this id, the reply will be an empty array
      : tweets[id].replies.sort(
          (a, b) => tweets[b].id - tweets[a].id
        )
  };
}

export default connect(mapStateToProps)(TweetPage);
