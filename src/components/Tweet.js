import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";
import {post} from "../utils/axios_with_token"
//importing icons from react-icons
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

import {FaRetweet} from "react-icons/fa"

import { handleToggleTweet } from "../actions/tweets";
import axios from "axios";

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    //todo: redirect to parent tweet
    this.props.history.push(`/`);
  };

  handleLike = e => {
    e.preventDefault();
    post('/tweets/'+ this.props.id + '/likes').then(
      this.props.dispatch({type: 'LIKE', id: this.props.id})
    ).catch()
    

    //
  };

  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This tweet doesn't exist</p>;
    }

    const {
      first_name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent
    } = tweet;

    return (
      <Link to={`/tweet/${id}`} className="tweet">
        <img src={avatar} alt={`Avatar of ${first_name}`} className="avatar" />

        <div className="tweet-info">
          <div>
            <span>{first_name}</span>
            <div>{formatDate(timestamp)} </div>
            {parent != null ? (
              <button
                className="replying-to"
                onClick={e => this.toParent(e, parent.id)}
              >
                Replying to @{parent.id}
              </button>
            ) : "" }
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            {/* show number only if it's not zero */}
            {/* <span>{replies.lengtweetth !== 0 ? replies: []} </span> */}
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes.length !== 0 && likes} </span>
            <FaRetweet className="tweet-icon" />
          </div>
        </div>
      </Link>
    );
  }
}

//id comes from the props passed by a parent component
function mapStateToProps({ tweets }, { id }) {
  return {
    tweet: tweets[id] !== null //making sure a tweet exists
      ? formatTweet(tweets, tweets[id])
      : null
  };
}

//using withRouter because this component is not being rendered by react router, so to have access to history props, we need to use withRouter
export default withRouter(connect(mapStateToProps)(Tweet));
