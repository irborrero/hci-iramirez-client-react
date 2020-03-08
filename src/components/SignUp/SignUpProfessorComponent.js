import React from "react";
import "./SignUp.style.client.css"

const SignUpProfessorComponent = () =>
        <React.Fragment>
            <h1>Sign Up</h1>
            <div className="container-signup-professor">
                <h3>Dear professor</h3>
                <h6>Please type your NEU faculty email.
                    <br></br>
                    Once you are verified as faculty we will send you and email to continue with the sign up process:
                </h6>
                <form>
                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-4 col-form-label"></label>
                        <div className="col-sm-4">
                            <input className="form-control wbdv-field wbdv-email"
                                   id="emailFld"
                                   placeholder="Introduce your email"/>
                        </div>
                        <label htmlFor="emailFld" className="col-sm-4 col-form-label"></label>
                    </div>
                </form>
                <button className="btn btn-signup">Confirm</button>
            </div>
        </React.Fragment>

export default SignUpProfessorComponent