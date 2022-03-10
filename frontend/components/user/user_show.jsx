import { EmailSharp } from '@mui/icons-material';
import React from 'react';
import PinIndexItem from '../pin/pin_index_item';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUsers();
    }

    parseEmail(email) {
       let username = ''; 
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                return username
            } else {
                username += email[i]
            }
        }
        return username
    }

    render() {
        const { user, users } = this.props;
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user.imgUrl ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar}/>
        const defaultCover = 'https://pinspire-seeds.s3.us-east-1.amazonaws.com/glassflower.jpeg';
        const cover = user.coverUrl ? <img className='cover-img' src={user.coverUrl} /> : <img className='cover-img' src={defaultCover} />


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

                    <div className='user-show-email'>
                        <h3>{this.parseEmail(user.email)}</h3>
                    </div>
                </section>

                {/* <section className='ideas'>
                    <div className="user-ideas">
                        <div className="ideas-container">
                            {pinsArray.map(pin =>
                                <PinIndexItem
                                    size={sizes[Math.floor(Math.random() * sizes.length)]}
                                    key={pin.id}
                                    currentUser={currentUser}
                                    pin={pin}
                                />)}
                        </div>
                        <div className="create-pin-button-container">
                            <Link to="/pins/create"><button className="create-pin-button">+</button></Link>
                        </div>
                    </div>
                </section> */}

            </div>
        )
    }
}

export default UserShow;