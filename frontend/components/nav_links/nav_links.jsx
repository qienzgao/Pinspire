import React from 'react';
const NavLinks = ({ currentUser, logout, open}) => {
    const sessionLinks = () => (
        <div className='header'>
            <div className='pinspire-logo'>
                <img className='pinspire-img'/>
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
    const loaded = () => (
            <div className='loggedin-header'>
                <div className='inspiration'>
                    <div className='pinspire-logo'>
                        <img className='pinspire-img'/>
                    </div>
                    <div className='home'>
                        <button className='home-button'>Home</button>
                    </div>
                    <div className='today'>
                        <button className='today-button'>Today</button>
                    </div>
                </div>
                    <div className='search-bar-container'>
                        <input className="search-bar" type="text" placeholder='Search'> 
                        </input>
                    </div>

                <div className="personal">
                    <div className="icons" >
                        <img className='linkedin-icon'/>
                    </div>

                    <div className="icons">
                        <img className='git-icon'/>
                    </div>

                    <div className='profile'>
                        <button className='profile-button'>P</button>
                    </div>
                    
                    <div className='profile'>
                        <button className="logout-button" onClick={() => logout()}>Log Out</button>
                    </div>
                </div>

            </div>
    );

    return (
        currentUser ? loaded() : sessionLinks()
    );
};

export default NavLinks;