import React from "react";
import {Link} from "react-router-dom";
import "./CourseTable.style.client.css"

const CourseRowUnselectedComponent  = ({index, course, selectRow}) =>
    <React.Fragment>
        <td onClick={() => selectRow(index)}>
            <Link data-tip="Click to select row" className="black"to={`/course-manager/course/${course._id}`}>
                <i className="fas fa-file-alt wbdv-row wbdv-icon fa-2x "></i>
                <label className="courseTitle">{course.title}</label>
            </Link>
        </td>
        <td className="collapsable wbdv-row wbdv-owner owned-collapse">Human Computer Interaction</td>
        <td className="collapsable wbdv-row wbdv-modified-date lastModified-collapse">Just Now</td>
        <td>
        </td>
    </React.Fragment>


export default CourseRowUnselectedComponent