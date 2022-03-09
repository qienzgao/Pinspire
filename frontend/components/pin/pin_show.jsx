import React from 'react';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                this.props.fetchUser(this.props.pin.user_id)
            })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        window.history.back();
    }

    render() {
        const {pin, user} = this.props; 
        if (!pin || !user) return null; 

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
                        <h3 className='email-show'>{user[pin.user_id].email}</h3>
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