import React, { Component } from "react";
import { connect } from "react-redux";
import { post } from "../utils/axios_with_token"
import { Redirect } from "react-router-dom";

class NewTweet extends Component {
  constructor(props){
    super(props);
    this.state = {text: '', parent: props.id}
  }

  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, parent } = this.state;
    post('/tweets/', {text, parent}).then(response => {
      this.setState({text: ''});
      this.props.history.push(`/tweet/${response.data.id}/`)
    }).catch(err => {
      if (err.response.status === 401)
        this.props.history.push('/login')
    });
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">Compose new Tweet </h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happenning"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {/* show how many characters are left */}
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}

          {/* button is disabled if it's an empty string */}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
