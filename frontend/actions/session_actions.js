import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const removeErrors = errors => ({
    type: REMOVE_ERRORS
}); 

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), errors => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), errors => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

