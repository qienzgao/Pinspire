import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPins, fetchPin } from '../../actions/pin_actions';
import UserShow from './user_show';
import { openBoardModal } from "../../actions/board_modal_actions"; 
import { open } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
    pins: Object.values(state.entities.pins),
    boards: state.entities.board
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal)),
    openFollowModal: modal => dispatch(open(modal))
})

export default connect(mSTP, mDTP)(UserShow); 