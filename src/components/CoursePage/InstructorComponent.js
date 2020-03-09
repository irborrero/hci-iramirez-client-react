import React from "react";

class InstructorComponent extends React.Component{

    render() {
        return(
            <div className="container-fluid border text-left">
                <div className="row">
                    <h1>INSTRUCTOR COMPONENT</h1>
                </div>
                <div className="row">
                    <div className="col-3 ">
                        <h3>Instructor Picture</h3>

                    </div>
                    <div className="col-9">
                        <h3>Brief description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default InstructorComponent