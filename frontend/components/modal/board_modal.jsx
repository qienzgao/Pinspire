import React from 'react';
import { closeBoardModal } from '../../actions/board_modal_actions';
import { connect } from 'react-redux';
import EditBoardForm from '../boards/edit_board_form_container';

class BoardModal extends React.Component {
    render() {
        const { boardModal, closeBoardModal } = this.props;

        let component;
        switch (boardModal) {
            case 'edit':
                component = <EditBoardForm board={this.props.board} closeBoardModal={this.props.closeBoardModal} />;
                break;
            default:
                return null;
        }

        return (
            <div className="modal-board-background" onClick={closeBoardModal}>
                <div className="follow-modal" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
};

const mSTP = state => {
    return {
        boardModal: state.boardModal,
    };
};

const mDTP = dispatch => {
    return {
        closeBoardModal: () => dispatch(closeBoardModal())
    };
};

export default connect(mSTP, mDTP)(BoardModal);