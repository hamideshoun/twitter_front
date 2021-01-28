import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { patch, post } from "../utils/axios_with_token"
const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #3a3a3a',
  marginBottom: '10px',
  borderRadius: '3px',
  outline: 'none',
  padding: '0px 0px 5px 5px',
};

class Profile extends Component{
    submit = (firstName, lastName, Email, Password, Password2) => {
        if(Password !== Password2) {
            alert("passwords do not match")
        }
        else {
            this.updateProfile(firstName, lastName, Email, Password);
        }
    }

    updateProfile = async (firstName, lastName, email, password) => {
        patch('/users/profile/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }).then(() => {
            this.props.history.push('/')
        }).catch(err => alert(err))
        
    };

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Register</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="profile-form">
                <input style={inputStyle} type="text" name="username"className="profile-form-field" placeholder="Username" id="profile-username" value={this.props.username}/>
                <input style={inputStyle} type="text" name="first_name" className="profile-form-field" placeholder="First Name" id="profile-first-name" value={this.props.firstName}/>
                <input style={inputStyle} type="text" name="last_name"  className="profile-form-field" placeholder="Last Name" id="profile-last-name" value={this.props.lastName}/>
                    <input style={inputStyle} type="text" name="email" className="profile-form-field" placeholder="Email" id="profile-email" value={this.props.email}/>
                    <input style={inputStyle} type="password" name="password" className="profile-form-field" placeholder="New Password" id="new-password" />
                    <input style={inputStyle} type="password" name="password2" className="profile-form-field" placeholder="Repeat Password" id="new-password2" />
                    <input style={inputStyle} type="button" value="Profile" id="profile-form-submit"
                        onClick={() => this.submit(
                                    document.getElementById("profile-first-name").value,
                                    document.getElementById("profile-last-name").value,
                                    document.getElementById("profile-email").value,
                                    document.getElementById("new-password").value,
                                    document.getElementById("new-password2").value)} 
                    />
                </form>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return users[localStorage.getItem("id")]
}

export default withRouter(connect(mapStateToProps)(Profile));