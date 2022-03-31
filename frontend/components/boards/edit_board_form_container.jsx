import React from 'react';
import { connect } from 'react-redux';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

class EditBoardForm extends React.Component {
    render() {
        const { board, formType, submitBoard, closeBoardModal, deleteBoard } = this.props;

        return (
            <BoardForm
                board={board}
                formType={formType}
                submitBoard={submitBoard}
                closeBoardModal={closeBoardModal}
                deleteBoard={deleteBoard} />
        );
    }
}

const mSTP = () => ({
    formType: 'Update Board'
})

const mDTP = dispatch => ({
    submitBoard: board => dispatch(updateBoard(board)),
    deleteBoard: board => dispatch(deleteBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm);