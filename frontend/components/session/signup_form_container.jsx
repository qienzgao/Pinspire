import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = ({errors}) => ({
    errors: errors.session, 
});

const mDTP = dispatch => ({
    submit: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user)), 
    login: () => dispatch(open('login')), 
    close: () => dispatch(close()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SignupForm);