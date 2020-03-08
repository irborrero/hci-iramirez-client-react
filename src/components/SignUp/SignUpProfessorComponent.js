import React from "react";
const SignUpProfessorComponent = () =>
    <div className="container">
        <h1>Sign Up</h1>
        <h3>Professor</h3>
        <h5>Type your NEU faculty email.
            <br></br>
            Once you are verified as faculty we will send yoy and email to continue with the sign up process:
        </h5>
        <form>
            <div className="form-group row">
                <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                    Email </label>
                <div className="col-sm-10 ">
                    <input className="form-control wbdv-field wbdv-email"
                           id="emailFld"
                           placeholder="Introduce your email"/>
                </div>
            </div>
        </form>
        <button>Confirm</button>
    </div>

export default SignUpProfessorComponent