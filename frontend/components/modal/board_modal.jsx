import React from 'react';
import { closeBoardModal } from '../../actions/board_modal_actions';
import { connect } from 'react-redux';
import EditBoardFormContainer from '../boards/edit_board_form_container';
import {fetchBoard} from '../../actions/board_actions';
import { withRouter } from 'react-router-dom'; 
import CreateBoardFormContainer from '../boards/board_form_container'

class BoardModal extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchBoard(this.props.boardId)
    // }

    render() {
        // console.log(this.props.boardId)
        const { board, boardModal, closeBoardModal, boardId} = this.props;
        let component;
        switch (boardModal) {
            // case 'edit':
            //     component = <EditBoardFormContainer board={board} closeBoardModal={closeBoardModal}/>;
            //     break;
            case 'create':
                component = <CreateBoardFormContainer closeBoardModal={closeBoardModal}/>
                break;
            default:
                return null;
        }
        return (
            <div className="board-modal-background" onClick={closeBoardModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
};

const mSTP = (state, ownProps) => {
    return {
        // boardId: state.entities.boards[ownProps.match.params.boardId],
        boardModal: state.boardModal,
    };
};

const mDTP = dispatch => {
    return {
        fetchBoard: boardId => dispatch(fetchBoard(boardId)),
        closeBoardModal: () => dispatch(closeBoardModal())
    };
};


export default withRouter(connect(mSTP, mDTP)(BoardModal));

