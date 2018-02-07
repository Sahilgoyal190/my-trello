import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTaskEdit } from '../../../actions/board';
import { updateModalStatus } from '../../../actions/common';


class EditTask extends React.Component {

    handleSubmit = () => {
        const newtask = {
            name: this.name.value,
            description: this.description.value,
            dueDate: this.dueDate.value,
            status: this.status.value
        }
        // if (this.props.addTask) {
        //     this.props.addNewtaskToListAction(newtask).then(() => {
        //         this.props.updateModalStatusAction(false);
        //     })
        // } else {
            this.props.updateTaskEditAction(newtask).then(() => {
                this.props.updateModalStatusAction(false);
            })
        // }

    }

    render() {
        const { name, description, dueDate, status } = this.props.task;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Edit Card
                    <span className="pull-right" onClick={() => this.props.updateModalStatusAction(false)} ><i className="pointer glyphicon glyphicon-remove"></i></span>
                </div>
                <div className="panel-body">
                    <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-tasks"></i></span>
                        <input type="text" className="form-control" placeholder="Task Name.."
                            ref={(name) => this.name = name} defaultValue={name} />
                    </div>
                    <textarea className="form-control" rows="5" placeholder="Enter Description" ref={(description) => this.description = description} defaultValue={description} />
                    <div className="body-bottom row">
                        <div className="col-md-6">
                            <div className="input-group input-group-sm" title="DueDate">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                                <input type="date" className="form-control" placeholder="Task Name.."
                                    ref={(dueDate) => this.dueDate = dueDate} defaultValue={dueDate} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group input-group-sm" title="DueDate">
                                <span className="input-group-addon">Status</span>
                                <select className="form-control" defaultValue={status} ref={(status) => this.status = status}>
                                    <option value="Backlog">Backlog</option>
                                    <option value="Doing">Doing</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <input type="button" className="btn btn-primary btn-block" value="Submit" onClick={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        task: state.board.currentTask
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateModalStatusAction: bindActionCreators(updateModalStatus, dispatch),
        updateTaskEditAction: bindActionCreators(updateTaskEdit, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
// export default EditTask;