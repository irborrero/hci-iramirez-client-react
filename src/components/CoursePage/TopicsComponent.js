import React from "react";
import {connect} from "react-redux";

class  TopicsComponent extends React.Component {

    componentDidMount() {
        //this.props.findAllTopics()
    }

    render() {
        return (
            <div className="col-3">
                <div className="overflow-auto">
                    <div className="list-group list-group-flush">
                        <text className="list-group-item">
                            <h4>CONVERSATION TOPICS</h4>
                        </text>
                        {
                            this.props.topics && this.props.topics.topics.map(topic =>
                                <a href="#" className="list-group-item list-group-item-action">
                                    {topic.title}
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        )


    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findAllTopics: () =>
            dispatch({
                type: 'FIND_ALL_TOPICS'
            })


    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicsComponent)


