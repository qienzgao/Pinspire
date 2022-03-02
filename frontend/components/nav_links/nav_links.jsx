import React from 'react';

const NavLinks = ({ currentUser, logout, open}) => {
    const sessionLinks = () => (
        <div className='header'>
            <div className='pinspire-logo'>
                <img className='pinspire-img' src="/app/assets/images/logo"/>
                <h1 className='pinspire-title'>Pinspire</h1>
            </div>

            <nav className="navlinks">
                <div className="about-links">
                    <div className="about-button" >
                        <a href="">About</a>
                    </div>

                    <div className="linkedin-button" >
                        <a href="https://www.linkedin.com/in/qien-gao-1390071a7/">Linkedin</a> 
                    </div>

                    <div className="git-button">
                        <a href="https://github.com/qienzgao">Github</a> 
                    </div>
                </div>

                <div className='login-header'>
                    <button className="login-nav" onClick={() => open('login')}>Log in</button>
                </div>

                <div className='signup-header'>
                    <button className="signup-nav" onClick={() => open('signup')}>Sign up</button>
                </div>
            </nav>
        </div>
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