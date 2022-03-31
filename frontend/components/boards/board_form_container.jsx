import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { close } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mSTP = (state) => ({
    board: {
        name: "",
        details: "",
        public: "true",
        user_id: state.session.id
    },
    formType: 'Create Board',
    error: state.errors.board
});

const mDTP = dispatch => ({
    submitBoard: board => dispatch(createBoard(board)),
    close: () => dispatch(close()),
})

export default connect(mSTP, mDTP)(BoardForm);