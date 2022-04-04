import React from 'react';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveMenuContainer from '../saved_pins/save_menu_container';

class PinShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        };
        this.dropdown = this.dropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                // this.props.fetchUsers()
                // .then(() => {
                    this.props.fetchUser(this.props.pin.user_id)
                        .then(() => {
                            this.props.fetchBoards()
                        })

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

    dropdown(e) {
        e.preventDefault();
        this.setState({
            showMenu: true
        })
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        const {pin, users} = this.props; 
        if (!pin || !users) return null; 
        const user = users[pin.user_id]
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />

        return (
            <div >
                <div className="background-show" onClick={this.closeMenu} >
                <div className="showpage" >
                    <div className="back-wrapper">
                        <Link to="/">
                            <button className="back-button">
                                <KeyboardBackspaceIcon/>
                            </button>
                        </Link>
                    </div>

                    <div className="show-button">
                        <SaveMenuContainer pin={this.props.pin} board={this.props.board} />
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
                </div>

                <div className='dropdown-container'>
                    {this.state.showMenu ?
                        <div className="dropdown-menu"
                            ref={(element) => {
                                this.dropdownMenu = element
                            }}>
                            <h4>create</h4>
                            <Link to="/pins/create"><button>Pin</button></Link>
                            <br />
                            <button>Board</button>
                        </div> : null}
                    <div className="create-pin-button-container">
                        <button className="create-pin-button" onClick={this.dropdown}>+</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;