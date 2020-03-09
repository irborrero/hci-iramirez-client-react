import React from "react";
import InstructorComponent from "./InstructorComponent";
import ConversationsComponent from "./ConversationsComponent";

class CoursePageComponent extends React.Component{

    render() {
        return(
            <div>
                <InstructorComponent/>
                <ConversationsComponent/>
            </div>

        )
    }

}

export default CoursePageComponent