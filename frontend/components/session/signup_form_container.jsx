import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = ( state ) => ({
    errors: state.errors.SessionErrorsReducer,
});

const mDTP = dispatch => ({
    submit: (user) => dispatch(signup(user)),
    login: (
        <button className="otherwise" onClick={() => dispatch(open('login'))}>
            Already a member? Log in
        </button>
    ),
    close: () => dispatch(close()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SignupForm);