import React from 'react';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveMenuContainer from '../saved_pins/save_menu_container';
import BoardModal from "../modal/board_modal"

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
                this.props.fetchUser(this.props.pin.user_id)
                    .then(() => {
                        this.props.fetchFollows()
                    })
                        .then(() => {
                            this.props.fetchBoards()
                        })
            })
        this.props.fetchSavedPins();
        this.props.fetchUsers();
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

    handleClick() {
        this.props.openBoardModal('create')
        this.closeMenu()
    }

    render() {
        const {pin, users, follows, session, submitFollow, deleteFollow} = this.props; 
        if (!pin || !users) return null; 
        const user = users[pin.user_id]
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />

        const followers = Object.values(follows).filter(follow => follow.following_id === pin.user_id);
        const followerCount = followers.length;
        const followStatus = Object.values(follows).filter(follow => follow.follower_id === session.id && follow.following_id === pin.user_id);

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
                        <SaveMenuContainer pin={this.props.pin}/>
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
                    
                        <h3 className='email-show'>{user? this.parseEmail(user.email): null}
                            <br/>
                            <span>{followerCount} followers</span>
                        </h3>
                            
                        {pin.user_id === session.id ? null :
                            <div className='follow-btns'>
                                {followStatus.length === 0 ?
                                    <button className="follow-btn" onClick={() => submitFollow({ follower_id: session.id, following_id: pin.user_id })} >
                                        Follow
                                    </button> :
                                    <button className="unfollow-btn"
                                        onClick={() => deleteFollow(followStatus[0])} >
                                        Unfollow
                                    </button>}
                            </div>
                        }   
                    </div>

                    <div>
                        
                    </div>
                   
                </div>
                </div>

                <BoardModal/>

                <div className='dropdown-container'>
                    {this.state.showMenu ?
                        <div className="dropdown-menu"
                            ref={(element) => {
                                this.dropdownMenu = element
                            }}>
                            <Link to="/pins/create"><button>Create a Pin</button></Link>
                            <br />
                            <button onClick={() => this.handleClick()}>Create a Board</button>
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