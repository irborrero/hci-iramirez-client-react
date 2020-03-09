import React from "react";
import "./LogIn.style.client.css";
import {Link, Route} from "react-router-dom";

const LogInComponent = () =>

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
        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <Link to="/course-manager">
                    <button className="btn btn-primary btn-block wbdv-button wbdv-login">Log in</button>
                </Link>
                <div className="row">
                    <div className="col-4 wbdv-link wbdv-forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    </div>
                </div>
            </div>
    </form>



export default LogInComponent