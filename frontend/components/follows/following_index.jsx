import React from 'react';
import { Link } from 'react-router-dom';

class FollowingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchFollows();
    }

    render() {
        const { users, follows, session, deleteFollow, submitFollow } = this.props;

        let followsArr = Object.values(follows);

        const followList = (follow) => {
            const followStatus = () => {
                for (let i = 0; i < followsArr.length; i++) {
                    let followObj = followsArr[i];
                    if (followObj.follower_id === session && followObj.following_id === follow.following_id) {
                        return (
                            <div key={i}>
                                <button className="follow-unfollow" onClick={() => deleteFollow(followObj)}>Unfollow</button>
                            </div>

                        )
                    }
                }

                return (<button className="follow-follow" onClick={() => submitFollow({ follower_id: session, following_id: follow.following_id })}>Follow</button>)
            }

            return (
                <div key={follow.id} className="follow-item-body">
                    <div className="follow-item" key={follow.id}>
                        <img className="follow-avatar" src={users[follow.following_id].imgUrl} />
                        <Link className="follow-name" to={`/users/${follow.following_id}`} onClick={this.props.closeFollowModal}>{users[follow.following_id].email}</Link>
                        <div className="nav-fil"></div>
                        {followStatus()}
                    </div>
                </div>
            )
        }

        return (
            <div key={session.id} className="follow-modal">
                <div className="follow-title">Following</div>
                <div onClick={this.props.closeFollowModal} className="close-x"></div>
                <div className="follow-list">
                    <div>
                        {
                            followsArr.map(follow =>
                                follow.follower_id === session.id ? followList(follow) : null
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowingIndex;