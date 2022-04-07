import React from 'react';
import { Link } from 'react-router-dom';

class FollowerIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchFollows();
    }

    render() {
        const { users, follows, session, deleteFollow, submitFollow, user} = this.props;
        
        console.log(user)
        console.log("hello")
        let followsArr = Object.values(follows);

        const followList = (follow) => {

            const followStatus = () => {
                for (let i = 0; i < followsArr.length; i++) {
                    let followObj = followsArr[i];
                    if (followObj.follower_id === session && followObj.following_id === follow.follower_id) {
                        return (
                            <button className="follow-unfollow" onClick={() => deleteFollow(followObj)}>Unfollow</button>
                        )
                    }
                }

                return (<button className="follow-follow" onClick={() => submitFollow({ follower_id: session, following_id: follow.follower_id })}>Follow</button>)
            }

            return (


                <div className="follow-item" key={follow.id}>
                    <Link to={`/users/${follow.follower_id}`}>
                        <div className='follow-info'>
                            <img className="follow-avatar" src={users[follow.follower_id].imgUrl} />
                            <span>{users[follow.follower_id].email}</span>
                        </div>
                    </Link>
                    {followStatus()}
                </div>
            )
        }

        return (
            <div className="follow-modal">
                <div className="follow-title">Followers</div>
                <div onClick={this.props.closeFollowModal} className="close-x"></div>
                <div className="follow-list">
                    <div>
                        {
                            followsArr.map(follow =>
                                follow.following_id === session.id ? followList(follow) : null
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowerIndex;