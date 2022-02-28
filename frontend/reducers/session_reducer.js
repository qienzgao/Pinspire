import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge'

const _nullUser = {
    currentUser: null
};

const SessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign({}, oldState); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // nextState[action.currentUser] = action.currentUser; 
            return Object.assign({}, {currentUser: action.currentUser}); 
        case LOGOUT_CURRENT_USER:
            return _nullUser;  
        default:
            return oldState;
    }
};

export default SessionReducer;