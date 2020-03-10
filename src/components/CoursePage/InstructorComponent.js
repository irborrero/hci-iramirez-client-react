import React from "react";
import {connect} from "react-redux";
import "./CoursePage.style.client.css"

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
                        <div className="row">
                            <div className="col-10">
                                <h3>Brief description</h3>
                            </div>
                            <div className="col-2">
                                {
                                    this.props.editingBriefDescription === false &&
                                    <button className="btn hidden wbdv-row wbdv-button wbdv-edit"
                                        onClick={this.props.editBriefDescription}>
                                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                    </button>
                                }
                                {
                                    this.props.editingBriefDescription &&
                                    <button className="btn wbdv-row wbdv-button wbdv-save"
                                        onClick={this.props.saveBriefDescription}>
                                        <i className="fas fa-check wbdv-button wbdv-save"></i>
                                    </button>

                                }
                            </div>
                        </div>
                        {
                            this.props.editingBriefDescription===false &&
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        }
                        {
                            this.props.editingBriefDescription &&
                            <textarea className="form-control"
                                      /*onChange={(e) => {
                                          const newText = String(e.target.value);
                                          this.setState(prevState => ({
                                              widget: {
                                                  ...prevState.widget,
                                                  text: newText
                                              }
                                          }))
                                      }
                                      }
                                      value={this.state.widget.text}*/>
                            </textarea>
                        }
                    </div>
                </div>
            </div>

        )
    }

}

const stateToPropertyMapper = (state) => {
    return {
        editingBriefDescription: state.instructor.editingBriefDescription
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        editBriefDescription: () =>
            dispatch({
                type: 'EDIT_BRIEF_DESCRIPTION'
            }),

        saveBriefDescription: () =>
            dispatch ({
                type: 'SAVE_BRIEF_DESCRIPTION'
            })

    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(InstructorComponent)
