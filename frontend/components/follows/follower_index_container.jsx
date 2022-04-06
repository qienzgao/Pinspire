import { connect } from 'react-redux';
import { fetchFollows, deleteFollow, createFollow } from '../../actions/follow_actions';
import { close } from '../../actions/modal_actions';
import FollowerIndex from './follower_index';

const mSTP = (state) => {
    return({
        follows: Object.values(state.follows)
    })
}

const mDTP = dispatch => ({
    fetchFollows: () => dispatch(fetchFollows()),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    submitFollow: follow => dispatch(createFollow(follow)),
    closeFollowModal: () => dispatch(close())
})

export default connect(mSTP, mDTP)(FollowerIndex);