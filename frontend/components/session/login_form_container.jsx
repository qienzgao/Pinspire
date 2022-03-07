import React from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    submit: user => dispatch(login(user)),
    signup: () => dispatch(open('signup')),
    close: () => dispatch(close()), 
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(LoginForm);