import React from 'react';
import LoginForm from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import SavedModal from '../pin/pin_saved_modal';
import FollowingIndexContainer from '../follows/following_index_container';
import FollowerIndexContainer from '../follows/follower_index_container';


const Modal = ({ modal, users, close, session }) => {
    if (!modal) {
        document.body.style.overflow = 'scroll';
        return null
    } else {
        document.body.style.overflow = 'hidden'
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginForm />;
            break;
        case 'signup':
            component = <SignupForm />;
            break;
        case 'saved':
            component = <SavedModal/>;
            break;
        case 'follower':
            component = <FollowerIndexContainer users={users} session={session}/>; 
            break; 
        case 'following':
            component = <FollowingIndexContainer users={users} session={session}/>; 
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={close}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal; 
