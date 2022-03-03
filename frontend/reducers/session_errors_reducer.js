import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, REMOVE_ERRORS} from '../actions/session_actions';
import { CLOSE } from '../actions/modal_actions'; 

 const SessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign([], oldState)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return []; 
        case REMOVE_ERRORS:
            return [];
        case CLOSE:
            return [];
        default:
            return oldState;
    }
};

export default SessionErrorsReducer; 