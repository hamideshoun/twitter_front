// import React, { Component } from "react";

// const inputStyle = {
//   border: 'none',
//   borderBottom: '1px solid #3a3a3a',
//   marginBottom: '10px',
//   borderRadius: '3px',
//   outline: 'none',
//   padding: '0px 0px 5px 5px',
// };

// class Settings extends Component{
//     submit = (Username, Password) => {
//         if (Username.length < 4){
//             alert("usermame must be more than 4 characters");
//         }
//         else {
//             this.fetchItems(Username, Password);
//         }
//     }

//     // function to send request and set state = response
//     fetchItems = async () => {
//         const data = await fetch(
//             {}
//         );
//         const items = await data.json();
//     };

//     render(){
//         return(
//             <div className="container">
//                 <h1 className="center" id="login-header">Settings</h1>
//                 <form style={{display: 'grid', justifyItems: 'center', alignItems: 'center', alignSelf: 'flex-start'}} id="login-form">
//                     <input style={inputStyle} type="text" name="username" id="username-field" className="login-form-field" placeholder="Username" id="username" />
//                     <input style={inputStyle} type="text" name="email" id="email-field" className="login-form-field" placeholder="Email" id="email" />
//                     <input style={inputStyle} type="password" name="password" id="password-field" className="login-form-field" placeholder="Password" id="password" />
//                     <input style={inputStyle} type="password" name="password2" id="password2-field" className="login-form-field" placeholder="Repeat Password" id="password2" />
//                     <input style={inputStyle} type="button" value="Login" id="login-form-submit"
//                         onClick={() => this.submit(document.getElementById("username").value, 
//                                     document.getElementById("email").value,
//                                     document.getElementById("password").value,
//                                     document.getElementById("password2").value)} 
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

// export default Settings;