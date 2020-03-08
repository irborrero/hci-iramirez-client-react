import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './HomePage.style.client.css';
import CourseGridComponent from "../../components/CourseGrid/CourseGridComponent";
import LogInComponent from "../../components/LogIn/LogInComponent";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import StudentOrProfessorComponent from "../../components/SignUp/StuendtOrProfessorComponent";
import SignUpProfessorComponent from "../../components/SignUp/SignUpProfessorComponent";

class HomePageContainer extends React.Component {

    render() {
        return(
            <Router>
                <Route path="/"
                       exact={true}
                       render={() =>
                           <div>
                           <nav className="navbar navbar-expand-lg bg-light">
                               <a className="navbar-brand" href="#">Husky-Info</a>
                               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                               </button>
                               <div className="collapse navbar-collapse" id="navbarText">
                                   <ul className="navbar-nav mr-auto">
                                       <li className="nav-item">
                                           <a className="nav-link" href="#">Home</a>
                                       </li>
                                       <li className="nav-item">
                                           <a className="nav-link" href="#">About</a>
                                       </li>
                                       <li className="nav-item">
                                           <a className="nav-link" href="#">Help</a>
                                       </li>
                                   </ul>
                                   <span className="navbar-text">
                           <Link to="/login">
                               <button className="btn btn-outline-danger nav-item float-right" type="button">Log In</button>
                           </Link>
                           <Link to="/signup">
                               <button className="btn btn-outline-danger" type="button">Sign Up
                           </button>
                           </Link>
                           </span>
                               </div>
                           </nav>
                               <div className="hv-100 justify-content-center align-items-center">
                                   <h1>Welcome to Husky-Info</h1>
                               </div>

                           </div>
                       }/>

                <Route path="/login"
                       exact={true}
                       render={() =>
                           <LogInComponent/>
                       }/>
                <Route path="/signup"
                       exact={true}
                       render={() =>
                           <StudentOrProfessorComponent/>
                       }/>
                <Route path="/signup/professor"
                       exact={true}
                       render={() =>
                           <SignUpProfessorComponent/>
                       }/>
                <Route path="/signup/form"
                       exact={true}
                       render={() =>
                           <SignUpComponent/>
                       }/>


            </Router>
        )
    }


}

export default HomePageContainer