import React from 'react';
import './main.css';
import ReactModal from 'react-modal';
import EditTask from '../edit-task'
import Tasks from '../tasks/tasks'
import Layout from '../layout/layout'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBoardData, updateCurrentTask, currentTaskType } from '../../../actions/board';
import { updateModalStatus } from '../../../actions/common';

class Board extends React.Component {

    componentDidMount() {
        const { match: { params: { board_id } } } = this.props;
        this.props.getBoardDataAction(board_id);
    }

    handleClick = (task, index) => {
        this.props.updateCurrentTaskAction(task, index);
        this.props.currentTaskTypeAction('edit');
        this.props.updateModalStatusAction(true);
    }

    handleCloseModal = () => {
        this.props.updateModalStatusAction(false);
    }

    render() {
        return (
            <Layout>
            <div className="container">
                <div className="row">
                    {
                        this.props.lists.map((ls, i) => {
                            return <Tasks key={i} list={ls} handleClick={this.handleClick} />
                        })
                    }
                </div>
                <ReactModal
                    isOpen={this.props.modalOpen}
                    contentLabel="Edit Task"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <EditTask />
                </ReactModal>
            </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.board.lists,
        modalOpen: state.common.modalOpen,
        index: state.board.index,
        currentTask: state.board.currentTask
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBoardDataAction: bindActionCreators(getBoardData, dispatch),
        updateModalStatusAction: bindActionCreators(updateModalStatus, dispatch),
        updateCurrentTaskAction: bindActionCreators(updateCurrentTask, dispatch),
        currentTaskTypeAction: bindActionCreators(currentTaskType, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);