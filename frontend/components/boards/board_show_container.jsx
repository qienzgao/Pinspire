import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchUsers } from '../../actions/user_actions';
import BoardShow from './board_show';

const mSTP = (state, ownProps) => {
    return ({
        users: state.entities.users,
        board: state.entities.boards[ownProps.match.params.boardId],
    })
}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
})

export default connect(mSTP, mDTP)(BoardShow)