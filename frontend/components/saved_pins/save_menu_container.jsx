import { connect } from 'react-redux';
import SaveMenu from './save_menu';
import { fetchSavedPins, createSavedPin, deleteSavedPin } from '../../actions/saved_pin_actions';
import { fetchBoards } from '../../actions/board_actions';


const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        savedPin: Object.values(state.entities.savedPin)
    })
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchSavedPins: () => dispatch(fetchSavedPins()),
    deleteSavedPin: SavedPinId => dispatch(deleteSavedPin(SavedPinId)),
    createSavedPin: SavedPin => dispatch(createSavedPin(SavedPin)),
});

export default connect(mSTP, mDTP)(SaveMenu);