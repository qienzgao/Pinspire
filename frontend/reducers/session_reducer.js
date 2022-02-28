import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge'

const SessionReducer = (oldState = { id: null }, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState
        case LOGOUT_CURRENT_USER:
            return nextState;
        default:
            return oldState;
    }
};

export default SessionReducer;