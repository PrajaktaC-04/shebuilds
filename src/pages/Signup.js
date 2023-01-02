import React from "react";
import { NavLink } from "react-router-dom";
const Signup = () => {
    return (
    <>
      <div className="page">
            <div className="main-box">
                <h1>SignUp</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat your password" />

                <div className="login-btn">Signup</div>
                <div className="new-sign">
                <p className="text">Already have an acoount?</p>
                <NavLink className="loginlink" to= "/login">Login</NavLink>
                </div>
            
            </div>
        </div>
    </>
    );
  };

  export default Signup;
