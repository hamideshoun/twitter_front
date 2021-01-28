import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

//importing icons from react-icons
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

import { get, patch, post } from "../utils/axios_with_token";

import {FaRetweet} from "react-icons/fa"

import { handleToggleTweet } from "../actions/tweets";

class Tweet extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweet: props.tweet,
    };
  }


  handleLike = e => {
    post(`/tweets/${this.state.tweet.id}/like`, {}).then(response => {
      this.setState({
        tweet: response.data,
      });
    });
  };

  handleRetweet = e => {
    post(`/tweets/${this.state.tweet.id}/retweet`, {}).then(response => {
      this.setState({
        tweet: response.data,
      });
    });
  };

  render() {
    console.log(this.props);
    

    return (
      <Link to={`/tweet/${this.state.tweet.id}`} className="tweet">
        <img src={this.state.tweet.user.avatar} alt={`Avatar of ${this.state.tweet.name}`} className="avatar" />

        <div className="tweet-info">
          <div>
            <span>{this.state.tweet.name}</span>
            <div>{formatDate(this.state.tweet.created)} </div>
            {/* {parent && (
              <button
                className="replying-to"
                onClick={e => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )} */}
            <p>{this.state.tweet.text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            {/* show number only if it's not zero */}
            <span>{this.state.tweet.replies2.length} </span>
             <button className="heart-button" onClick={this.handleLike}>
              {this.state.tweet.hasLiked ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{this.state.tweet.likes.count} </span>

            <button className="heart-button" onClick={this.handleRetweet}>
              {this.state.tweet.hasRetweeted ? (
                <FaRetweet color="#e0245e" className="tweet-icon" />
              ) : (
                <FaRetweet className="tweet-icon" />
              )}
            </button>
            <span>{this.state.tweet.retweets.count} </span>
          </div>
        </div>
      </Link>
    );
  }
}

//using withRouter because this component is not being rendered by react router, so to have access to history props, we need to use withRouter
export default Tweet;
