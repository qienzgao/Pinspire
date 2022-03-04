import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = state => ({
    currentUser: state.session.currentUser
});

export default connect(mSTP)(Splash); 