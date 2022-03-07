import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import * as ModalControl from '../../actions/modal_actions';
import NavLinks from './nav_links';

// import {currentUser} from '../../actions/session_actions'; 

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    open: modal => dispatch(ModalControl.open(modal))
});

export default connect(mSTP, mDTP)(NavLinks);