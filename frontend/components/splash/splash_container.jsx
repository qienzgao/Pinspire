import { connect } from 'react-redux';
import Splash from './splash';
import { fetchPins } from '../../actions/pin_actions';
import { fetchSavedPins } from '../../actions/saved_pin_actions';
import { fetchBoards } from '../../actions/board_actions'; 
import { openBoardModal } from "../../actions/board_modal_actions"; 



const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchBoards: () => dispatch(fetchBoards()),
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal)),
    fetchSavedPins: () => dispatch(fetchSavedPins())
})

export default connect(mSTP, mDTP)(Splash); 