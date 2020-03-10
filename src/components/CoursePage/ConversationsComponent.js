import React from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ConversationsComponent extends React.Component{

    render() {
        return(
            <div className="col-9">
                <div className="list-group">
                    <text className="list-group-item border-0">
                        <h4>DISCUSSIONS FOR TOPIC</h4>
                    </text>

                    {


                    }

                </div>
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1"> I had a great experience!!</h5>
                            <small>Today</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                            eget risus varius blandit.</p>
                        <small>By Ann</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Great class but a lot of work...</h5>
                            <small className="text-muted">1 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                            eget risus varius blandit.</p>
                        <small className="text-muted">By Jerry</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Very useful!!</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                            eget risus varius blandit.</p>
                        <small className="text-muted">By Dona</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Could have been better organized</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                            eget risus varius blandit.</p>
                        <small className="text-muted">By Ben</small>
                    </a>
                </div>

            </div>

        )
    }

}

const stateToPropertyMapper = (state) => {
    return {
        discussions: state.discussions
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
(ConversationsComponent)