import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUsers();
        this.props.fetchPins()
    }

    parseEmail(email) {
        let username = '';
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                return username
            } else if (i === 0) {
                username += email[i].toUpperCase()
            } else {
                username += email[i]
            }
        }
        return username
    }

    parseUsername(email) {
        let username = '@';
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                return username
            } else {
                username += email[i].toLowerCase()
            }
        }
        return username
    }

    render() {
        const { pins, user, users } = this.props;
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user.imgUrl ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar}/>
        const defaultCover = 'https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/scaleshape.jpeg';
        const cover = user.coverUrl ? <img className='cover-img' src={user.coverUrl} /> : <img className='cover-img' src={defaultCover} />
        const sizes = ["ex-small", "small", "medium", "large", "ex-large"]

        if (!users || !user) return null;

        return (
            <div >                
                <section className='profile-background'>
                    <div className="profile-cover">
                        {cover}
                    </div>

                    <div className="avatar-container">
                        {avatar}
                    </div>

                    <div className='user-show-name'>
                        <h3>{this.parseEmail(user.email)}</h3>
                    </div>

                    <div className='user-show-username'>
                        <span>{this.parseUsername(user.email)}</span>
                    </div>

                    <div className='about-me'>
                        <span>Hey there! You finally come! There are a lot I want to share about myself, scroll down and see what I've got!</span>
                    </div>
                    
                    <div className='arrow-down'>
                        <button>
                            <KeyboardArrowDownIcon fontSize="large"/>
                        </button>
                    </div>
                </section>

                <section className='ideas'>
                    <div className="user-ideas">
                        <div className="ideas-container">
                            {pins.map(pin =>(
                                pin.user_id === user.id ?
                                <PinIndexItem
                                    size={sizes[Math.floor(Math.random() * sizes.length)]}
                                    key={pin.id}
                                    user_id={user.id}
                                    pin={pin} /> : null  
                             ))}
                        </div>
                    </div>
                </section>

                <div className="create-pin-button-container">
                    <Link to="/pins/create"><button className="create-pin-button">+</button></Link>
                </div>

            </div>
        )
    }
}

export default UserShow;