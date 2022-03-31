import { OPEN_BOARD_MODAL, CLOSE_BOARD_MODAL } from '../actions/board_modal_actions';

const boardModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_BOARD_MODAL:
            return action.boardModal;
        case CLOSE_BOARD_MODAL:
            return null;
        default:
            return state;
    };
};

export default boardModalReducer;