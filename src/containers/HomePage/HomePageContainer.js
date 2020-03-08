import React from "react";
import './HomePage.style.client.css';

class HomePageContainer extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-light bg-faded float-right">
                    <button className="btn btn-outline-success" type="button"
                            formAction="../../components/LogIn/LogInComponent.js">Log In</button>
                    <button className="btn btn-outline-secondary" type="button">Sign Up
                    </button>
            </nav>

        )
    }


}

export default HomePageContainer