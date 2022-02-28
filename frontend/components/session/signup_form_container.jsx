import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    else: (
        <button onClick={() => dispatch(open('login'))}>
            Already a member? Log in
        </button>
    ),
    close: () => dispatch(close())
});

export default connect(mSTP, mDTP)(SignupForm);