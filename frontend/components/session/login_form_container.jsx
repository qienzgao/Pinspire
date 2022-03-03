import React from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = (state) => ({
    errors: state.errors.SessionErrorsReducer,
});

const mDTP = dispatch => ({
    submit: user => dispatch(login(user)),
    signup: (
        <button className="otherwise" onClick={() => dispatch(open('signup'))}>
            Not on Pinspire yet? Sign up
        </button>
    ),
    close: () => dispatch(close()), 
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(LoginForm);