export const OPEN_BOARD_MODAL = 'OPEN_BOARD_MODAL';
export const CLOSE_BOARD_MODAL = 'CLOSE_BOARD_MODAL';

export const openBoardModal = boardModal => {
    return {
        type: OPEN_BOARD_MODAL,
        boardModal
    };
};

export const closeBoardModal = () => {
    return {
        type: CLOSE_BOARD_MODAL,
    };
};

