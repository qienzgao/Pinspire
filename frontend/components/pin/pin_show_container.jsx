import { connect } from 'react-redux';
import { fetchPin, fetchPins } from '../../actions/pin_actions';
import {fetchUser, fetchUsers } from '../../actions/user_actions'; 
import { fetchBoards } from '../../actions/board_actions';
import PinShow from './pin_show';
import { openBoardModal } from "../../actions/board_modal_actions"


const mSTP = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBoards: () => dispatch(fetchBoards()),
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal))
})

export default connect(mSTP, mDTP)(PinShow)