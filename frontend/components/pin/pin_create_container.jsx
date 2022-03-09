import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreate from './pin_create';

const mSTP = state => ({
    user: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    submit: (pin) => dispatch(createPin(pin)),
})

export default connect(mSTP, mDTP)(PinCreate);