import { connect } from 'react-redux';
import SaveMenu from './save_menu';
import { fetchSavedPins, createSavedPin, deleteSavedPin } from '../../actions/saved_pin_actions';
import { fetchBoards, fetchBoard } from '../../actions/board_actions';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        savedPins: Object.values(state.entities.savedPins),
        pins: state.entities.pins
    })
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchSavedPins: () => dispatch(fetchSavedPins()),
    deleteSavedPin: savedPinId => dispatch(deleteSavedPin(savedPinId)),
    createSavedPin: savedPin => dispatch(createSavedPin(savedPin)),
});

export default connect(mSTP, mDTP)(SaveMenu);