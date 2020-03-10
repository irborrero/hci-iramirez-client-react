import React from "react";
import {connect} from "react-redux";
import "./CoursePage.style.client.css"

class InstructorComponent extends React.Component{

    state = {
        briefDescription: this.props.briefDescription
    }

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
                                        onClick={()=> this.props.saveBriefDescription(this.state.briefDescription)}>
                                        <i className="fas fa-check wbdv-button wbdv-save"></i>
                                    </button>

                                }
                            </div>
                        </div>
                        {
                            this.props.editingBriefDescription===false &&
                            <span>{this.props.briefDescription}</span>
                        }
                        {
                            this.props.editingBriefDescription &&
                            <textarea className="form-control"
                                      onChange={(e) => {
                                          const newText = String(e.target.value);
                                          this.setState(prevState => ({
                                              briefDescription: newText
                                          }))
                                      }
                                      }
                                      value={this.state.briefDescription}>
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
        briefDescription: state.instructor.briefDescription,
        editingBriefDescription: state.instructor.editingBriefDescription
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        editBriefDescription: () =>
            dispatch({
                type: 'EDIT_BRIEF_DESCRIPTION'
            }),

        saveBriefDescription: (newDescription) =>
            dispatch ({
                type: 'SAVE_BRIEF_DESCRIPTION',
                newDescription: newDescription
            })

    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(InstructorComponent)
