import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_action';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState; 
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return nextState; 
        default:
            return oldState;
    }
};

export default UsersReducer;