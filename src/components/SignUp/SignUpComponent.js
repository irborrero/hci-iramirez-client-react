import React from "react";
const SignUpComponent = () =>
    <form>
        <div className="form-group row">
            <label htmlFor="nameFld" className="col-sm-2 col-form-label">
                Name </label>
            <div className="col-sm-10 ">
                <input className="form-control wbdv-field wbdv-name"
                       id="nameFld"
                       placeholder="Introduce your name"/>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="lastNameFld" className="col-sm-2 col-form-label">
                Last Name </label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-lastname"
                       id="lastNameFld"
                       placeholder="Introduce your last name"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="College" className="col-sm-2 col-form-label">
                College </label>
             <select className=" col-sm-10 form-control">
                <option value="CS">Khoury College of Computer Science</option>
                <option value="IS">Information Systems</option>
            </select>
        </div>
        <div className="form-group row">
            <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                Husky Email </label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-email"
                       id="lastNameFld"
                       placeholder="Introduce your husky email"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                Password </label>
            <div className="col-sm-10">
                <input type="password" className="form-control wbdv-field wbdv-password"
                       id="passwordFld"
                       placeholder="Introduce password"/>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">
                Verify Password </label>
            <div className="col-sm-10">
                <input type="password" className="form-control wbdv-field wbdv-password-verify"
                       id="verifyPasswordFld"
                       placeholder="Introduce password again"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button id="registerBtn"
                        className="btn btn-primary btn-block wbdv-button wbdv-register"
                        formAction="">Create Account
                </button>
            </div>
        </div>
    </form>

export default SignUpComponent