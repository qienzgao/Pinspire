import { connect } from 'react-redux';
import { fetchPins, fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import PinEdit from './pin_edit';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    pin: state.entities.pins[ownProps.match.params.pinId], 
    pins: state.entities.pins
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchPin: pinId => dispatch(fetchPin(pinId)), 
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pin => dispatch(deletePin(pin))
})

export default connect(mSTP, mDTP)(PinEdit);