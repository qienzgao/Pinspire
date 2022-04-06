import { connect } from 'react-redux';
import { fetchFollows, deleteFollow, createFollow } from '../../actions/follow_actions';
import { close } from '../../actions/modal_actions';
import FollowerIndex from './follower_index';

const mSTP = (state) => ({
    follows: Object.values(state.entities.follows),
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchFollows: () => dispatch(fetchFollows()),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    submitFollow: follow => dispatch(createFollow(follow)),
    closeFollowModal: () => dispatch(close())
})

export default connect(mSTP, mDTP)(FollowerIndex);