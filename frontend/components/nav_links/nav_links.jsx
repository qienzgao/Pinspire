import React from 'react';

const NavLinks = ({ currentUser, logout, open}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => open('login')}>Log in</button>
            <button onClick={() => open('signup')}>Sign up</button>
        </nav>
    );
    const greet = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Welcome back, {currentUser.name}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ? greet(currentUser, logout) : sessionLinks()
    );
};

export default NavLinks;