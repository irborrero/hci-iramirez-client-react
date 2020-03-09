import React from "react";
import InstructorComponent from "./InstructorComponent";
import ConversationsComponent from "./ConversationsComponent";
import TopicsComponent from "./TopicsComponent";

import topicsReducer from "../../reducers/topicReducer";
import discussionReducer from "../../reducers/discussionReducer";

import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    topics: topicsReducer,
    discussions: discussionReducer
})

const store = createStore(rootReducer);

class CoursePageComponent extends React.Component{

    render() {
        return(
            <Provider store={store}>
                <div>
                    <InstructorComponent/>
                    <div className="container-fluid text-left">
                        <div className="row">
                            <TopicsComponent/>
                            <ConversationsComponent/>
                        </div>
                    </div>
                </div>
            </Provider>

        )
    }

}

export default CoursePageComponent