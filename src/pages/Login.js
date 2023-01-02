import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
    return (
        <>
        <div className="page">
            <div className="main-box">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn">Login</div>
                <div className="new-sign">
                <p className="text">Are you a new member?</p>
                <NavLink className="signlink" to= "/signup">Sign up</NavLink>
                </div>
            
            </div>
        </div>
        </>
    );
};
export default Login;