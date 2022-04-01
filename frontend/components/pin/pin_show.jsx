import React from 'react';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

class PinShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                // this.props.fetchUsers()
                // .then(() => {
                    this.props.fetchUser(this.props.pin.user_id)
                    // .then(() => {
                    //     this.props.fetchPins()
                    // })
                // })
            })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        window.history.back();
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

    render() {
        const {pin, users} = this.props; 
        if (!pin || !users) return null; 
        const user = users[pin.user_id]
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />
        return (
            <div className="background-show">
                <div className="showpage">
                    <div className="back-wrapper">
                        <Link to="/">
                            <button className="back-button">
                                <KeyboardBackspaceIcon/>
                            </button>
                        </Link>
                    </div>

                    <div className="show-button">
                        <button className="save-button">Save</button>
                    </div>

                    <div className="show-img-wrapper">
                        <div className="show-img-container">
                            <img className='show-img' src={pin.imgUrl} alt=""/>
                        </div>
                    </div>

                    <div className='title-display-container'>
                        <h2 className='title-display'>{pin.title}</h2>
                    </div>

                    <div className="details-display-container">
                        <h3 className='details-display'>{pin.details}</h3>
                    </div>
                    <div className="user-show-display">
                        <Link to={`/users/${pin.user_id}`}>
                            {avatar}
                        </Link>
                        <h3 className='email-show'>{user? this.parseEmail(user.email): null}</h3>
                    </div>

                </div>

                <div className="create-pin-button-container">
                    <Link to="/pins/create"><button className="create-pin-button">+</button></Link>
                </div>

            </div>
        )
    }
}

export default PinShow;