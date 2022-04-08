// import { connect } from 'react-redux';
// import { fetchFollows, deleteFollow, createFollow } from '../../actions/follow_actions';
// import { close } from '../../actions/modal_actions';
// import FollowingIndex from './following_index';

// const mSTP = (state) => ({
//     follows: Object.values(state.follows),
//     users: state.entities.users,
//     session: state.session
// })

// const mDTP = dispatch => ({
//     fetchFollows: () => dispatch(fetchFollows()),
//     deleteFollow: follow => dispatch(deleteFollow(follow)),
//     submitFollow: follow => dispatch(createFollow(follow)),
//     closeFollowModal: () => dispatch(close())
// })

// export default connect(mSTP, mDTP)(FollowingIndex);