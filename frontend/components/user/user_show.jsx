import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BoardIndexContainer from '../boards/board_index_container';
import { borderBottom } from '@mui/system';
import BoardModal from "../modal/board_modal"
// import FollowingIndexContainer from '../follows/following_index_container';
// import FollowerIndexContainer from '../follows/follower_index_container';

class UserShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMenu: false, 
            created: false, 
            saved: true, 
            follower: false, 
            following: false
        }
        this.dropdown = this.dropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.createdTab = this.createdTab.bind(this);
        this.savedTab = this.savedTab.bind(this); 
        this.openFollowerModal = this.openFollowerModal.bind(this); 
        this.openFollowingModal = this.openFollowingModal.bind(this); 
        this.closeModal = this.closeModal.bind(this)
    }

    openFollowerModal(e) {
        e.preventDefault(); 
        this.setState({
            follower: true, 
            following: false
        })
    }

    openFollowingModal(e) {
        e.preventDefault();
        this.setState({
            follower: false,
            following: true
        })
    }

    closeModal() {
        this.setState({
            follower: false, 
            following: false
        })
    }

    createdTab(e) {
        e.preventDefault(); 
        this.setState({
            created: true, 
            saved: false
        })
    }

    savedTab(e) {
        e.preventDefault();
        this.setState({
            saved: true, 
            created: false
        })
    }

    dropdown(e) {
        e.preventDefault();
        this.setState({
            showMenu: true
        })
    }

    closeMenu() {
        this.setState({ showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    
    handleClick() {
        this.props.openBoardModal('create')
        this.closeMenu()
    }

    componentDidMount() {
        this.props.fetchUsers()
            .then(()=> {
                this.props.fetchUser(this.props.match.params.userId)
                    .then(() => {
                        this.props.fetchFollows();
                    })
            })

        this.props.fetchPins()
        this.props.fetchBoards();
       

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
        const { pins, user, users, openBoardModal, follows, session, submitFollow, deleteFollow } = this.props;
        if (!users || !user) return null;

        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user.imgUrl ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />
        const defaultCover = 'https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/scaleshape.jpeg';
        const cover = user.coverUrl ? <img className='cover-img' src={user.coverUrl} /> : <img className='cover-img' src={defaultCover} />
        const sizes = ["ex-small", "small", "medium", "large", "ex-large"];
        let cStyle = this.state.created ? "solid 3px black" : "none";
        let sStyle = this.state.saved ? "solid 3px black" : "none"; 


        const followers = Object.values(follows).filter(follow => follow.following_id === user.id);
        const followings = Object.values(follows).filter(follow => follow.follower_id === user.id);
        const followerCount = followers.length; 
        const followingCount = followings.length; 
        const currentFollowings = Object.values(follows).filter(follow => follow.follower_id === session.id);

        const followerList = followers.map(follower => {
            return (
                <div key={follower.follower_id} className="follow-item">
                    <div className="follow-info">
                        <Link to={`/users/${follower.follower_id}`}>
                            <img src={users[follower.follower_id].imgUrl ||= defaultAvatar}></img>
                        </Link>
                            <span>{this.parseEmail(users[follower.follower_id].email)}</span>
                    </div>
                    {currentFollowings.filter(currentFollowing => currentFollowing.following_id === follower.follower_id).length === 0 ?
                        <button className="follow-btn" onClick={() => submitFollow({ follower_id: session.id, following_id: follower.follower_id })} >
                            Follow
                        </button> :
                        <button className="unfollow-btn" 
                            onClick={() => deleteFollow(currentFollowings.filter(currentFollowing => currentFollowing.following_id === follower.follower_id)[0])} >
                            Unfollow
                        </button>}
                </div>
            )
        })

        const followingList = followings.map(following => {
            return (
                <div key={following.following_id} className="follow-item">
                    <div className="follow-info">
                        <Link to={`/users/${following.following_id}`}>
                            <img src={users[following.following_id].imgUrl ||= defaultAvatar}></img>
                        </Link>
                            <span>{this.parseEmail(users[following.following_id].email)}</span>
                    </div>
                    {currentFollowings.filter(currentFollowing => currentFollowing.following_id === following.following_id).length === 0 ?
                        <button className="follow-btn">Follow</button> :
                        <button className="unfollow-btn" 
                            onClick={() => deleteFollow(currentFollowings.filter(currentFollowing => currentFollowing.following_id === following.following_id)[0])} >
                            Unfollow
                        </button>}
                </div>
            )
        })

        return (
            <div >                
                <section className='profile-background' onClick={this.closeMenu}>
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
                        <span>Hey you finally come! There are a lot I want to share with you, scroll down and see what I've got! Life is all about seeking inspirations!</span>
                    </div>

                    <div className='follow-display-container'>
                        <button onClick={this.openFollowerModal}>{followerCount} followers</button>
                        <button onClick={this.openFollowingModal}>{followingCount} following</button>
                    </div>

                </section>

                <section >
                    <div >
                        {this.state.follower ? 
                        <div className='modal-background' onClick={this.closeModal}>
                            <div className='modal-child'>
                                <div className='follow-modal'>
                                    <div className='follow-title'>
                                        <h3>{followerCount} Followers</h3>
                                    </div>
                                    <button onClick={this.closeModal} className="close-button">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    {followerList}
                                </div>
                            </div>
                        </div> : null }
                    </div>

                    <div>
                        {this.state.following ?
                            <div className='modal-background' onClick={this.closeModal}>
                                <div className='modal-child'>
                                    <div className='follow-modal'>
                                        <div className='follow-title'>
                                            <h3>Following</h3>
                                        </div>
                                        <button onClick={this.closeModal} className="close-button">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        {followingList}
                                    </div>
                                </div>
                            </div> : null}
                    </div>
                </section>

                <div className='tabs'>
                    <button className='created-tab' onClick={this.createdTab} style={{ borderBottom: cStyle }}>Created</button>
                    <button className='saved-tab' onClick={this.savedTab} style={{ borderBottom: sStyle }}>Saved</button>
                </div>

                <section className='ideas' onClick={this.closeMenu}>
                    {this.state.created ? 
                        <div className="user-ideas">
                            <div className="ideas-container">
                                {pins.map(pin => (
                                    pin.user_id === user.id ?
                                        <PinIndexItem
                                            size={sizes[Math.floor(Math.random() * sizes.length)]}
                                            key={pin.id}
                                            user_id={user.id}
                                            pin={pin} /> : null
                                ))}
                            </div>
                        </div> : null}
                    {this.state.saved ? 
        
                        <div className='board-index' onClick={this.closeMenu}>
                            <BoardIndexContainer user={user} user_id={user.id} />
                        </div> : null}
                    
                </section>
                
                    {/* <BoardModal followers={followers} followings={followings} user={user}/> */}

                <div className='dropdown-container'>
                    {this.state.showMenu ?
                        <div className="dropdown-menu">
                            {/* <h4>create</h4> */}
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

export default UserShow;