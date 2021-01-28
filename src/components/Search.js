import React, { Component } from "react";   
import SearchBar from "../components/SearchBar"
import { get } from "../utils/axios_with_token";
import Tweet from "./Tweet";

class Search extends Component {
    constructor(props){
        super(props);
        alert(JSON.stringify(this.props, null, '\t'))
    }
    async componentDidMount() {
        // tweets = await get('/tweets/').then(response => alert(JSON.stringify(response, null, '\t')))
    }
  render() {
    console.log(this.props);
    return (
      <div className="dashboard">
        <h3 className="center">Search Results </h3>
        <SearchBar />
        {/* <ul className="dashbord-list">
          {this.props.tweetsIds.map(id => (
            <li key={id}>
              <div>TWEET ID: {id} </div> 
              <Tweet id={id} />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Search;
