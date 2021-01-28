import React, { Component } from "react";
import { post } from "../utils/axios_with_token";

const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #3a3a3a',
  marginBottom: '10px',
  borderRadius: '3px',
  outline: 'none',
  padding: '0px 0px 5px 5px',
};

class Register extends Component{
    componentDidMount(){
        localStorage.clear()
    }
    submit = (username, email, password, password2, first_name, last_name) => {
        if (username.length < 4){
            alert("usermame must be more than 4 characters");
        }
        else if (password !== password2) {
            alert("different passwords");
        }
        else {
            post(
                '/users/register/',
                {
                    username, email, password, first_name, last_name,
                },
            ).then(res => {
                let data = res.data
                localStorage.setItem('token', `Token ${data.token}`);
                localStorage.setItem('id', data.id)
                document.getElementById('login_id').hidden = true
                document.getElementById('logout_id').hidden = false
                this.props.history.push('/')
            }).catch(err => {
            alert(err);
        })
        }
    }

    

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Register</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form">
                    <input style={inputStyle} type="text" name="username" className="login-form-field" placeholder="Username" id="username" />
                    <input style={inputStyle} type="text" name="firstname" className="login-form-field" placeholder="First Name" id="firstname" />
                    <input style={inputStyle} type="text" name="lastname" className="login-form-field" placeholder="Last Name" id="lastname" />
                    <input style={inputStyle} type="text" name="email" className="login-form-field" placeholder="Email" id="email" />
                    <input style={inputStyle} type="password" name="password" className="login-form-field" placeholder="Password" id="password" />
                    <input style={inputStyle} type="password" name="password2" className="login-form-field" placeholder="Repeat Password" id="password2" />
                    <input style={inputStyle} type="button" value="Login" id="login-form-submit"
                        onClick={() => this.submit(document.getElementById("username").value, 
                                    document.getElementById("email").value,
                                    document.getElementById("password").value,
                                    document.getElementById("password2").value,
                                    document.getElementById("firstname").value,
                                    document.getElementById("lastname").value)} 
                    />
                </form>
            </div>
        );
    }
}

export default Register;