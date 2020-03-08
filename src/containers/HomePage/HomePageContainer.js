import React from "react";
import './HomePage.style.client.css';

class HomePageContainer extends React.Component {

    render() {
        return(

            <div>
                <nav className="navbar navbar-light bg-faded float-right">
                    <button className="btn btn-outline-success" type="button">Log In</button>
                    <button className="btn btn-outline-secondary" type="button">Sign Up
                    </button>
                </nav>
            </div>
        )
    }


}

export default HomePageContainer