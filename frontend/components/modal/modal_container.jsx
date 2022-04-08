import { close } from '../../actions/modal_actions'
import { connect } from 'react-redux';
import Modal from '../modal/modal'; 

const mSTP = state => {
    return({
        modal: state.modal,
        users: state.entities.users,
        session: state.session
})};

const mDTP = dispatch => ({
    close: () => dispatch(close()),
});

export default connect(mSTP, mDTP)(Modal);