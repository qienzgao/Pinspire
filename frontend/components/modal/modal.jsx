import React from 'react';
import LoginForm from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';

const Modal = ({ modal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginForm />;
            break;
        case 'signup':
            component = <SignupForm />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal; 
