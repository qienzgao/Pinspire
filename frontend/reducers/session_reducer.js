import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge'

const _nullUser = Object.freeze({
    currentUser: null
});

const SessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign({}, oldState); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.currentUser}) 
        case LOGOUT_CURRENT_USER:
            return _nullUser;  
        default:
            return oldState;
    }
};

export default SessionReducer;