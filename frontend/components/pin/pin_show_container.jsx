import { connect } from 'react-redux';
import { fetchPin, fetchPins } from '../../actions/pin_actions';
import {fetchUser, fetchUsers } from '../../actions/user_actions'; 
import PinShow from './pin_show';

const mSTP = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchUsers: () => dispatch(fetchUser()),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(PinShow)