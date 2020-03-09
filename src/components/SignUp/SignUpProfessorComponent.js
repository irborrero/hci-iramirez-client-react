import React from "react";
import "./SignUp.style.client.css"
import {Link} from "react-router-dom";

const SignUpProfessorComponent = () =>
        <React.Fragment>
            <h1>Sign Up</h1>
            <div className="container-login">
                <h3>Dear professor,</h3>
                <h6>Please type your NEU faculty email.
                    <br></br>
                    Once you are verified as faculty in our platform, we will send you and email to continue with the sign up process:
                </h6>
                <form>
                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-4 col-form-label"></label>
                        <div className="col-sm-4">
                            <input className="form-control wbdv-field wbdv-email"
                                   id="emailFld"
                                   placeholder="Email"/>
                        </div>
                        <label htmlFor="emailFld" className="col-sm-4 col-form-label"></label>
                    </div>
                </form>
            </div>
            <Link to="/signup/confirmemail">
                <button className="btn btn-outline-danger login2">Confirm</button>
            </Link>
        </React.Fragment>

export default SignUpProfessorComponent