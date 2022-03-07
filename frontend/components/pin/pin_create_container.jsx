import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreate from './pin_create';
import { open } from '../../actions/modal_actions';

const mSTP = state => ({
    user: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    submit: (pin) => dispatch(createPin(pin)),
    saved: () => dispatch(open('saved')),
})

export default connect(mSTP, mDTP)(PinCreate);