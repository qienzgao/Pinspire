import { connect } from 'react-redux';
import { fetchBoard, fetchBoards } from '../../actions/board_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import BoardShow from './board_show';
import { fetchSavedPins } from '../../actions/saved_pin_actions';
import { fetchPins } from '../../actions/pin_actions'

const mSTP = (state, ownProps) => {
    return ({
        users: state.entities.users,
        board: state.entities.boards[ownProps.match.params.boardId],
        savedPins: state.entities.savedPins,
        pins: state.entities.pins, 
        boards: state.entities.boards
    })
}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchSavedPins: () => dispatch(fetchSavedPins()),
    fetchPins: () => dispatch(fetchPins()), 
    fetchBoards: () => dispatch(fetchBoards()),
})

export default connect(mSTP, mDTP)(BoardShow)