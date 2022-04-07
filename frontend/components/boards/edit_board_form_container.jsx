import { connect } from 'react-redux';
import { fetchBoards, fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import EditBoardForm from './edit_board_form'; 
// import { withRouter } from 'react-router-dom'; 

const mSTP = (state, ownProps) => {
    // console.log(state)
    // console.log("state")
    return ({
        board: state.entities.boards[ownProps.match.params.boardId], 
        boards: state.entities.boards
    })
    
}

const mDTP = dispatch => ({
    // fetchBoards: () => dispatch(fetchBoards()),
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    submitBoard: board => dispatch(updateBoard(board)),
    deleteBoard: board => dispatch(deleteBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm);

