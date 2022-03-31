import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeBoardModal} from '../../actions/board_modal_actions';
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
    close: () => dispatch(closeBoardModal()),
})

export default connect(mSTP, mDTP)(BoardForm);