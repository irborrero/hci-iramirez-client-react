import React from "react";
import "./LogIn.style.client.css";
import {Link, Route} from "react-router-dom";

const LogInComponent = () =>
    <React.Fragment>
        <h1>Welcome</h1>
        <form className="container-login">
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10 ">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Introduce username"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="password"
                           placeholder="Introduce password"/>
                </div>
            </div>
        </form>
            <Link to="/course-manager">
                <button className="btn btn-outline-danger btn-block wbdv-login login2">Log in</button>
            </Link>

    </React.Fragment>




export default LogInComponent