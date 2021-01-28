import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading"; //importing the loading bar given by react-redux-loading

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Profile from "./Profile";
import Activity from "./ActivityPage";
import Nav from "./Nav";
import Settings from "./Settings";
class App extends Component {
  componentDidMount() {
    console.log("hiiiiii")
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        {/* using a fragment so we don't add another element (div) to the DOM */}
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={Dashboard} time={new Date()}/>
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
                <Route path="/Profile" component={Profile} />
                <Route path="/activity" component={Activity} />
                <Route path="/settings" component={Settings} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
