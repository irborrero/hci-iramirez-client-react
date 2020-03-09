import React from "react";
import "./SignUp.style.client.css"
import {Link} from "react-router-dom";

const ConfirmEmailComponent = () =>
    <React.Fragment>
        <div className="container">
            <h1>Please assume that you have seen an email from us with your professor identity verified.
            </h1>
            <Link to="/signup/form">
                <button>
                    Okay :)
                </button>
            </Link>
        </div>

    </React.Fragment>

export default ConfirmEmailComponent