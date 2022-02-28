import React from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    signup: (
        <button className="otherwise" onClick={() => dispatch(open('signup'))}>
            Not on Pinspire yet? Sign up
        </button>
    ),
    close: () => dispatch(close())
});

export default connect(mSTP, mDTP)(LoginForm);