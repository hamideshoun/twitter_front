import React, { Component } from "react";

const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #3a3a3a',
  marginBottom: '10px',
  borderRadius: '3px',
  outline: 'none',
  padding: '0px 0px 5px 5px',
};

class Login extends Component{
    submit = (username, password) => {
        if (username.length() < 4){
            
        }
    }

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Login</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form">
                    <input style={inputStyle} type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" id="username" />
                    <input style={inputStyle} type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" id="password" />
                    <input style={inputStyle} type="submit" value="Login" id="login-form-submit"  
                        onClick={() => this.submit(document.getElementById("username").value, 
                                                    document.getElementById("password").value)} 
                    />
                </form>
            </div>
        );
    }
}

export default Login;