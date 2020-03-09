import React from "react";
import {Link} from "react-router-dom";
import "./CourseTable.style.client.css"

class CourseRowSelectedComponent extends React.Component {

        state = {
                course: {
                        title: ''
                }
        }

        save = (course) =>
        {
                this.setState(prevState => {
                        return {
                                course: course
                        }
                })
                this.props.editRow(this.props.index, this.props.course)
        }


        render() {
                return(
                    <React.Fragment>
                            <td class ="selected" onClick={() => this.props.selectRow(this.props.index)}>
                                    {
                                            this.props.index !== this.props.editingRow &&
                                            <Link className="white"  to={`/course/${this.props.course._id}`}>
                                                    <i className="fas fa-file-alt wbdv-row wbdv-icon white"></i>
                                                    <label className="courseTitle">{this.props.course.title}</label>
                                            </Link>
                                    }
                                    {this.props.index === this.props.editingRow &&
                                    <input id="newinput"
                                           onChange={(e) => {
                                                   const newTitle = e.target.value;
                                                   this.setState(prevState => ({
                                                           course: {
                                                                   ...prevState.course,
                                                                   title: newTitle
                                                           }
                                                   }))
                                                }
                                           }
                                           value={this.state.course.title}/>}
                            </td>
                            <td className="collapsable wbdv-row wbdv-owner owned-collapse selected">me</td>
                            <td className="collapsable wbdv-row wbdv-modified-date lastModified-collapse selected">11:45 AM</td>
                            <td className="selected">
                                    {
                                            this.props.index === this.props.editingRow &&
                                            <button className="btn wbdv-row wbdv-button wbdv-save white"
                                                    onClick={() => this.save(this.state.course)}>
                                                    <i className="fas fa-check wbdv-button wbdv-save"></i>
                                            </button>

                                    }

                                    {
                                            this.props.index !== this.props.editingRow &&
                                            <div>
                                                    <button className="btn wbdv-row wbdv-button wbdv-edit white"
                                                            onClick={()=> {
                                                                    this.props.editRow(this.props.index, this.props.course)
                                                                    this.setState({
                                                                            course: this.props.course
                                                                    })
                                                            }}>
                                                            <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                                    </button>
                                                    <button className="btn wbdv-row wbdv-button wbdv-delete white"
                                                            onClick={()=>this.props.deleteRow(this.props.course)}>
                                                            <i className="fas fa-trash-alt wbdv-row wbdv-button wbdv-delete"></i>
                                                    </button>
                                            </div>

                                    }

                            </td>
                    </React.Fragment>

                )}
}


export default CourseRowSelectedComponent
