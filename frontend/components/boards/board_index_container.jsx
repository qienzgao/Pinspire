import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import { fetchSavedPins } from '../../actions/saved_pin_actions';
import BoardIndex from './board_index';

const mSTP = state => ({
    boards: Object.values(state.entities.boards),
    savedPins: state.entities.savedPins,
    pins: state.entities.pins
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchSavedPins: () => dispatch(fetchSavedPins()),
    deleteBoard: board => dispatch(deleteBoard(board))
})

export default connect(mSTP, mDTP)(BoardIndex);