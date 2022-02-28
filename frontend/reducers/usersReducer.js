import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Objec.assign({}, oldState); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState; 
        default:
            return state;
    }
};

export default UsersReducer;