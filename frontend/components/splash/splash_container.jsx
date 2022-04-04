import { connect } from 'react-redux';
import Splash from './splash';
import { fetchPins } from '../../actions/pin_actions';
import { fetchSavedPins } from '../../actions/saved_pin_actions';
import { fetchBoards } from '../../actions/board_actions'

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(Splash); 