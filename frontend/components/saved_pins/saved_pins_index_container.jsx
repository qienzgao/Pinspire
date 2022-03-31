import { connect } from 'react-redux';
import { fetchSavedPins, createSavedPin, deleteSavedPin } from '../../actions/saved_pin_actions';
import { fetchPins } from '../../actions/pin_actions';
import SavedPinsIndex from './saved_pins_index';

const mSTP = (state) => ({
    saved_pins: Object.values(state.entities.saved_pins),
    pins: state.entities.pins
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchSavedPins: () => dispatch(fetchSavedPins()),
    deleteSavedPin: SavedPinsId => dispatch(deleteSavedPin(SavedPinsId)),
    createSavedPin: SavedPin => dispatch(createSavedPin(SavedPin)),
})

export default connect(mSTP, mDTP)(SavedPinsIndex);