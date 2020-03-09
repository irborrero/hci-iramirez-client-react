import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const CourseTableHeaderComponent = ({toggle}) =>

    <React.Fragment>
        <Route path={["/course-manager", "/course-manager/table"]}
               exact={true}
               render={() =>
                   <tr className = "table">
                       <th className="wbdv-header wbdv-title" scope="col">Title
                           <button className="btn">
                               <i className="fas fa-sort-up"></i>
                           </button>
                       </th>
                       <th className="wbdv-header wbdv-owner owned-collapse" scope="col">
                           <label>Owned by</label>
                       </th>
                       <th className="wbdv-header wbdv-last-modified lastModified-collapse" scope="col">
                       <div className="form-check">
                           <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                               <label className="form-check-label" htmlFor="defaultCheck1">
                                   Last Modified by Me
                               </label>
                       </div>
                       </th>
                       <th scope="col">
                           <button className="btn wbdv-button wbdv-grid-layout"
                                   onClick={toggle} >
                               <Link  className="black" to={`/course-manager/grid`}>
                                   <i className="fas fa-grip-horizontal"></i>
                               </Link>
                           </button>
                           <button className="btn wbdv-button wbdv-header wbdv-sort" data-toggle="tooltip"
                                   title="Sort">
                               <i className="fas fa-sort-alpha-up"></i>
                           </button>
                       </th>
                   </tr>
               }/>

        <Route path="/course-manager/grid"
               exact={true}
               render={() =>
                   <tr className = "grid">
                       <th className="wbdv-header wbdv-recent" scope="col">Recent Documents
                       </th>
                       <th className="wbdv-header wbdv-owner" scope="col">
                           <label className = "grid owned-label">Owned by me</label>
                           <i className="fas fa-sort-down"></i>
                       </th>
                       <th scope="col">
                           <button className="btn wbdv-button wbdv-header wbdv-folder">
                               <i className="fas fa-folder"></i>
                           </button>
                           <button className="btn wbdv-button wbdv-header wbdv-sort">
                               <i className="fas fa-sort-alpha-up"></i>
                           </button>
                           <button className="btn wbdv-button wbdv-list-layout" onClick={toggle} >
                               <Link className="black" to={`/course-manager/table`}>
                                   <i className="fas fa-list"></i>
                               </Link>
                           </button>
                       </th>
                   </tr>
               }/>
    </React.Fragment>



export default CourseTableHeaderComponent