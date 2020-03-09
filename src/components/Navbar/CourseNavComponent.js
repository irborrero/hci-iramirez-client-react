import React from "react";
import "./CourseNav.style.client.css"


const CourseNavComponent = ({addCourse, updateForm}) =>

               <React.Fragment>
                   <nav className="navbar navbar-expand-lg">
                       <div className="col-3">
                           <div className="row">
                               <div className="col-2">
                                   <i className="fa fa-bars wbdv-hamburger fa-2x"></i>
                               </div>
                               <div className="collapse navbar-collapse col-10">
                                   <label className="wbdv-label wbdv-course-manager">
                                       Course Manager</label>
                               </div>
                           </div>
                       </div>
                       <div className="col-7">
                           <input
                               className="form-control wbdv-field"
                               onChange={(e) => updateForm({
                                   newCourseTitle: e.target.value
                               })}
                               placeholder="New Course Title"
                               id="wbdv-new-course"/>
                       </div>
                       <div className="col-2">
                           <button onClick={addCourse} className="btn text wbdv-button wbdv-add-course">
                               Add Course
                           </button>
                       </div>
                   </nav>
               </React.Fragment>


export default CourseNavComponent