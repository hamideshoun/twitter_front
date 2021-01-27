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
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         password: "",
    //         username: "",
    //     }
    // }

    submit = (Username, Password) => {
        if (Username.length < 4){
            alert("usermame must be more than 4 characters");
        }
        else {
            this.fetchItems(Username, Password);
        }
    }

    // componentDidMount(){
    //     this.fetchItems();
    // };

    // function to send request and set state = response
    fetchItems = async () => {
        const data = await fetch(
            {}
        );
        const items = await data.json();
    };

    render(){
        return(
            <div className="container">
                <h1 className="center" id="login-header">Login</h1>
                <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form">
                    <input style={inputStyle} type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" id="username" />
                    <input style={inputStyle} type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" id="password" />
                    <input style={inputStyle} type="button" value="Login" id="login-form-submit"
                        onClick={() => this.submit(document.getElementById("username").value, 
                                    document.getElementById("password").value)} 
                    />
                </form>
            </div>
        );
    }
}

export default Login;