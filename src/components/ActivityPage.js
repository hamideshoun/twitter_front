import React, { Component } from "react";
import Activity from "./Activity";
import { get } from './../utils/axios_with_token'

class ActivityPage extends Component {

    constructor(props){
      super(props);
      this.state = {activities: []}
    }
    componentDidMount(){
      get('/users/activities').then(response => {
        this.setState({activities: response.data})
      })
      .catch(err=>{
        alert(err);
        if (err.response.status === 401)
          this.props.history.push('/');
      })
    }
    render(){
      if (!!!this.state.activities)
        return <h1>Loading...</h1>
      return (
        <div>
          <h3 className="center">Your Activity</h3>
          <ul className="dashbord-list">
            {this.state.activities.map(activity => (
              <li>
                {/* <div>TWEET ID: {id} </div> */}
                <Activity activity={activity} />
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default ActivityPage;