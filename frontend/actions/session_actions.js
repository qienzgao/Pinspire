import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveCurrentUser = currentUser => {
    // debugger
    return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors: errors
});

export const removeErrors = errors => ({
    type: REMOVE_ERRORS
}); 

export const signup = user => dispatch => {
    // debugger
    return (
        SessionAPIUtil.signup(user).then(
            currentUser => (
            dispatch(receiveCurrentUser(currentUser))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
    )
};

export const login = user => dispatch => {
    return(
        SessionAPIUtil.login(user).then(
            currentUser => (
            dispatch(receiveCurrentUser(currentUser))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
    );
}

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

