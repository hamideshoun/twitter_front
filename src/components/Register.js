import React, { Component } from "react";
const axios = require('axios').default;
const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #3a3a3a',
  marginBottom: '10px',
  borderRadius: '3px',
  outline: 'none',
  padding: '0px 0px 5px 5px',
};

class Register extends Component{
    submit = (Username, firstName, lastName, Email, Password, Password2) => {
        if (Username.length < 4){
            alert("usermame must be more than 4 characters");
        } else if(Password !== Password2) {
            alert("passwords do not match")
        }
        else {
            this.fetchItems(Username, firstName, lastName, Email, Password);
        }
    }

    // componentDidMount(){
    //     this.fetchItems();
    // };

    // function to send request and set state = response
    fetchItems = async (username, firstName, lastName, email, password) => {
        const token = await axios.post(process.env.REACT_APP_HOST + '/users/register/', {
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }).then(response => {
            localStorage.setItem('token', `Token ${response.data.token}`);
            localStorage.setItem('id', response.data.id);
            this.props.history.push('/')
        }).catch(err => alert(err))
        
    };

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Register</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form">
                <input style={inputStyle} type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" id="username" />
                <input style={inputStyle} type="text" name="first_name" className="login-form-field" placeholder="First Name" id="first-name" />
                <input style={inputStyle} type="text" name="last_name"  className="login-form-field" placeholder="Last Name" id="last-name" />
                    <input style={inputStyle} type="text" name="email" id="email-field" className="login-form-field" placeholder="Email" id="email" />
                    <input style={inputStyle} type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" id="password" />
                    <input style={inputStyle} type="password" name="password2" id="password2-field" className="login-form-field" placeholder="Repeat Password" id="password2" />
                    <input style={inputStyle} type="button" value="Login" id="login-form-submit"
                        onClick={() => this.submit(document.getElementById("username").value, 
                                    document.getElementById("first-name").value,
                                    document.getElementById("last-name").value,
                                    document.getElementById("email").value,
                                    document.getElementById("password").value,
                                    document.getElementById("password2").value)} 
                    />
                </form>
            </div>
        );
    }
}

export default Register;