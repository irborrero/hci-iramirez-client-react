import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './HomePage.style.client.css';
import LogInComponent from "../../components/LogIn/LogInComponent";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import StudentOrProfessorComponent from "../../components/SignUp/StuendtOrProfessorComponent";
import SignUpProfessorComponent from "../../components/SignUp/SignUpProfessorComponent";
import CourseManagerContainer from "../CourseManager/CourseManagerContainer";
import ConfirmEmailComponent from "../../components/SignUp/ConfirmEmailComponent";
import CoursePageComponent from "../../components/CoursePage/CoursePageComponent";
import husky from "./husky.jpg"

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
                               <div className="container-home col-12">
                                   <div className="hv-100 justify-content-center align-items-center">
                                       <h1 className="white">Welcome to Husky-Info</h1>
                                   </div>
                                       <img src={husky} className="image-husky"/>
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

                <Route path="/signup/confirmemail"
                       exact={true}
                       render={() =>
                           <ConfirmEmailComponent/>
                       }/>

                <Route path={["/course-manager",
                    "/course-manager/table",
                    "/course-manager/grid",
                    "/course-manager/table/panel",
                    "/course-manager/grid/panel"]}
                       exact={true}
                       render={() =>
                           <CourseManagerContainer/>
                       }/>
                <Route path="/course-manager/course/:courseId"
                       exact={true}
                       render={(props) =>
                           <CoursePageComponent
                               {...props}
                               courseId={props.match.params.courseId}
                           />
                       }/>
                <Route path="/course-manager/course/:courseId/topic/:topicId"
                       exact={true}
                       render={(props) =>
                           <CoursePageComponent
                               {...props}
                               courseId={props.match.params.courseId}
                               topicId={props.match.params.topicId}
                           />
                       }/>


            </Router>
        )
    }


}

export default HomePageContainer