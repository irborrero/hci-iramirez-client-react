import React from "react";

class ConversationsComponent extends React.Component{

    render() {
        return(
            <div className="container-fluid text-left">
                <div className="row">
                    <div className="col-3">

                        <div className="overflow-auto">
                            <div className="list-group list-group-flush">
                                <text className="list-group-item">
                                    <h4>CONVERSATION TOPICS</h4>
                                </text>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Grading
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Work Load
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Instructor
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Content
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Prequesites
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="list-group">
                            <text className="list-group-item border-0">
                                <h4>DISCUSSIONS FOR TOPIC</h4>
                            </text>

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
                                <small>By Ana</small>
                            </a>
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Great class but a lot of work...</h5>
                                    <small className="text-muted">1 days ago</small>
                                </div>
                                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                                    eget risus varius blandit.</p>
                                <small className="text-muted">By Jake</small>
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
                </div>


            </div>
        )
    }

}

export default ConversationsComponent