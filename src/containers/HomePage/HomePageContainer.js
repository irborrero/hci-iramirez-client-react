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
                               <nav className="navbar navbar-light bg-faded ">
                                   <Link to="/login">
                                       <button className="btn btn-outline-success" type="button">Log In</button>
                                   </Link>
                                   <Link to="/signup">
                                       <button className="btn btn-outline-secondary" type="button">Sign Up
                                       </button>
                                   </Link>
                               </nav>
                               <h1>Welcome to husky-Info</h1>
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