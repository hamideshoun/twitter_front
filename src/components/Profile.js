import React, { Component } from "react";
import { get } from "../utils/axios_with_token"

import Tweet from "./Tweet";

class Profile extends Component {
  constructor(props){
      super(props);
      this.state = {
        user : {},
        tweets: []
      }
    };

    componentDidMount() {
        let tempuser = {};
        get(`/users/${this.props.match.params.id}`).then(
                    response2 => { tempuser = response2.data;
                    });

        get (`/tweets/?user__id=${this.props.match.params.id}`).then(response => {
            let tweets = response.data;
            
            this.setState({
                user: tempuser,
                tweets,
            });
            console.log(this.state)
        });
    }

  render() {
    if (!this.state.user.id)
      return <h1>loading...</h1>
    return (
        <div>
          <h3 className="center">{this.state.user.username}</h3>
          <ul className="dashbord-list">
            <li className="center"> <img src={this.state.user.avatar} alt="avatar" className="avatar" /> </li>
             {this.state.tweets ? this.state.tweets.map(tweet => (
            <li key={tweet}>
              <Tweet tweet={tweet} />
            </li>
          )) : 
            <li>Nothing to Share</li>
            }
          </ul>

        </div>
    );
  }
}


export default Profile;
