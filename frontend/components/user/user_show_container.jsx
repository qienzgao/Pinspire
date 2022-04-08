import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPins, fetchPin } from '../../actions/pin_actions';
import UserShow from './user_show';
import { openBoardModal } from "../../actions/board_modal_actions"; 
import { open } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';
import { fetchFollows, deleteFollow, createFollow } from '../../actions/follow_actions';
import { fetchSavedPins } from '../../actions/saved_pin_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
    pins: Object.values(state.entities.pins),
    boards: state.entities.board, 
    follows: state.entities.follows,
    session: state.session
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    submitFollow: follow => dispatch(createFollow(follow)),
    fetchFollows: () => dispatch(fetchFollows()),
    fetchSavedPins: () => dispatch(fetchSavedPins())
})

export default connect(mSTP, mDTP)(UserShow); 