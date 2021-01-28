import React from 'react';
import { get } from '../utils/axios_with_token';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {keyword: ''}
  }

    handleSearch = e => {
        this.props.history.push('/tweets/?search='+this.state.keyword)
      };

    render() {
        return (
          <form className="search-bar" onSubmit={this.handleSearch}>
            <input 
                className="search-input"
                value={this.state.keyword}
                placeholder={"Search"}
                onChange={(e) => {
                    this.setState({keyword: e.target.value})
                }}
             />
             <button className="search-button" type="submit" disabled={this.state.keyword === "" || this.state.keyword===null || this.state.keyword === undefined}>
             <i className="fa fa-search"></i>
            </button>
          </form>
        );
    }
}

export default withRouter(SearchBar);