import React from "react";
import CourseRowUnselectedComponent from "./CourseRowUnselectedComponent";
import CourseRowSelectedComponent from "./CourseRowSelectedComponent";



const CourseRowComponent = ({course, index, deleteCourse, activeRow, editingRow, selectRow, editRow}) =>
{
    return(
        <tr className="wbdv-row wbdv-course">
            {
                index !== activeRow &&
                <CourseRowUnselectedComponent
                    index = {index}
                    course = {course}
                    selectRow = {selectRow}
                />
            }
            {
                index === activeRow &&
                // eslint-disable-next-line react/jsx-no-undef
                <CourseRowSelectedComponent
                    index = {index}
                    course = {course}
                    selectRow = {selectRow}
                    editingRow = {editingRow}
                    deleteRow = {deleteCourse}
                    editRow = {editRow}
                />
            }
        </tr>
    )
}

export default CourseRowComponent