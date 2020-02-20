import React from "react";
import {Link} from "react-router-dom";


const CoursePanelComponent = ({courses}) =>
            <div className="container panel">
               <div className="panel panel-default">
                   <div className="panel-heading">
                       <h2>All Courses Panel</h2>
                   </div>
                       {courses.map(function(course, index){
                           return (
                               <div className="panel-body">
                                   {course.title}
                               </div>
                           )
                        })}

                    <button className="btn text">
                        <Link className="black" to={`/`}>
                           Go Home
                        </Link>
                    </button>
               </div>
            </div>


export default CoursePanelComponent