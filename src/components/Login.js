import React, { Component } from "react";
import axios from 'axios';
import { get } from './../utils/axios_with_token'
import { a } from '../index'
const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #3a3a3a',
  marginBottom: '10px',
  borderRadius: '3px',
  outline: 'none',
  padding: '0px 0px 5px 5px',
};

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            username: "",
        }
    }

    submit = (event) => {
        if (this.state.username.length < 4){
            alert("usermame must be more than 4 characters");
        }
        else {
            this.login(event);
        }
    }

    // componentDidMount(){
    //     this.fetchItems();
    // };

    // function to send request and set state = response
    login = async (event) => {
        event.preventDefault();

        await axios.post(
            process.env.REACT_APP_HOST + '/users/login/',
            this.state,
        ).then(res => {
            let data = res.data
            localStorage.setItem('token', `Token ${data.token}`);
            localStorage.setItem('id', data.id)
            this.props.history.push('/')
        }).catch(err => {
            alert(err);
        })
    };

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Login</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form" onSubmit={this.submit}>
                    <input style={inputStyle} type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" id="username" onChange={(event)=> this.setState({username: event.target.value})} />
                    <input style={inputStyle} type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" id="password" onChange={(event)=> this.setState({password: event.target.value})}/>
                    <input style={inputStyle} type="submit" value="Login" id="login-form-submit" />
                </form>
            </div>
        );
    }
}

export default Login;