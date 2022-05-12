import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const NavLinks = ({ currentUser, logout, open}) => {

    const sessionLinks = () => (
        <div className='header'>
            <div className='pinspire-logo'>
                <img className='pinspire-img' src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/p_favicon.png"/>
                <h1 className='pinspire-title'>Pinspire</h1>
            </div>

            <nav className="navlinks">
                <div className="about-links">
                    <div className="about-button" >
                        <a href="http://qiengao.com" target="_blank">Portfolio</a>
                    </div>

                    <div className="linkedin-button" >
                        <a href="https://www.linkedin.com/in/qien-gao-1390071a7/" target="_blank">Linkedin</a> 
                    </div>

                    <div className="git-button">
                        <a href="https://github.com/qienzgao" target="_blank">Github</a> 
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
                    <img className='pinspire-img' src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/p_favicon.png"/>
                    </div>
                    <div className='home'>
                    <Link to="/" ><button className='home-button'>Home</button></Link>
                    </div>
                    <div className='today'>
                    <Link to="/"><button className='today-button'>Today</button></Link>
                    </div>
                </div>
                    <div className='search-bar-container'>
                        <input className="search-bar"
                            type="text" 
                            placeholder='Search'
                            />
                    </div>

                <div className="personal">

                    <div className="icons">
                        <a href="https://qiengao.com" target="_blank">
                            <AccountBoxIcon className="icon" color="action" fontSize="large" />
                        </a>
                    </div>

                    <div className="icons" >
                    <a href="https://www.linkedin.com/in/qien-gao-1390071a7/" target="_blank">
                            <LinkedInIcon className="icon" color="action" fontSize='large'/>
                        </a>
                    </div>

                    <div className="icons">
                    <a href="https://github.com/qienzgao" target="_blank">
                            <GitHubIcon className="icon" color="action" fontSize="large"/>
                        </a>
                    </div>

                    <div className='profile'>
                        <Link to={`/users/${currentUser.id}`}>
                            <button className='profile-button'>
                            {currentUser.imgUrl ? <img src={currentUser.imgUrl} /> : <img className="default-icon" src={"https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png"} />}
                            </button>
                        </Link>
                    </div>
                    
                    <div className='profile'>
                        <Link to="/">
                            <button className="logout-button" onClick={() => logout()}>
                                <LogoutIcon color='action'/>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
    );

    return (
        currentUser ? loaded() : sessionLinks()
    );
};

export default NavLinks;