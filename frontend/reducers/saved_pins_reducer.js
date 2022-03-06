import { RECEIVE_SAVEDPINS, RECEIVE_SAVEDPIN, REMOVE_SAVEDPIN } from '../actions/pinstoboard_actions';

const SavedPinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SAVEDPINS:
            return action.savedPins;
        case RECEIVE_SAVEDPIN:
            nextState[action.savedPin.id] = action.savedPin
            return nextState;
        case REMOVE_SAVEDPIN:
            delete nextState[action.savedPinId];
            return nextState;
        default:
            return oldState;
    }
};

export default SavedPinsReducer;