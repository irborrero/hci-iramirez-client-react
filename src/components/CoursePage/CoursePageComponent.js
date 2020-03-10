import React from "react";
import InstructorComponent from "./InstructorComponent";
import ConversationsComponent from "./ConversationsComponent";
import TopicsComponent from "./TopicsComponent";

import topicsReducer from "../../reducers/topicReducer";
import discussionReducer from "../../reducers/discussionReducer";
import instructorReducer from "../../reducers/instructorReducer";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const rootReducer = combineReducers({
    topics: topicsReducer,
    discussions: discussionReducer,
    instructor: instructorReducer
})

const store = createStore(rootReducer);

class CoursePageComponent extends React.Component{

    render() {
        return(
            <Provider store={store}>
                <div>
                    <InstructorComponent
                        couseId = {this.props.courseId}
                    />
                    <div className="container-fluid text-left">
                        <div className="row">
                            <TopicsComponent
                                courseId = {this.props.courseId}
                                topicId = {this.props.topicId}
                            />
                            <ConversationsComponent
                                courseId = {this.props.courseId}
                                topicId = {this.props.topicId}/>
                        </div>
                    </div>
                </div>
            </Provider>

        )
    }

}

export default CoursePageComponent