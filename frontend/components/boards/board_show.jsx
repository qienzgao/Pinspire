import React from 'react';
import SavedPinsIndex from '../saved_pins/saved_pins_index';
import PinIndexItem from '../pin/pin_index_item';
import {Link} from 'react-router-dom'

class BoardShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
            .then(() => {
                this.props.fetchUser(this.props.board.user_id)
            })
        
        // this.props.fetchBoards()
        // this.props.fetchUsers();
        this.props.fetchSavedPins(); 
        this.props.fetchPins();
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
        const { board, users, savedPins, pins} = this.props;
        if (!users || !board) return null;

        let savedArr = Object.values(savedPins)
        let pinArr = Object.values(pins)
        let filteredArr = savedArr.filter(savedPin => savedPin.board_id === board.id);
        let filteredPins = []

        for (let i = 0; i < filteredArr.length; i++ ) {
            for (let j = 0; j < pinArr.length; j++) {
                if (pinArr[j].id === filteredArr[i].pin_id) {
                    filteredPins.push(pinArr[j])
                }
            }
        }

        const user = users[board.user_id]
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />

        return (
            <div >
                <section className='board-info-container'>
                    <div>
                        <h3>{board.name}</h3>
                    </div>

                    <div>
                        <span>{board.details}</span>
                    </div>

                    <div className='board-avatar-container'>
                        <Link to={`/users/${board.user_id}`}>{avatar}</Link>
                    </div>

                    <div >
                        <span>{user? this.parseEmail(user.email): null}</span>
                    </div>

                </section>

                    <section className='ideas'>
                        <div className="user-ideas">
                            <div className="ideas-container">
                                {filteredPins.map(pin => 
                                    <PinIndexItem
                                        pin={pin}
                                        key={pin.id}
                                    />
                                )}
                            </div>
                        </div>
                    </section>
               
            </div>
        )
    }
}

export default BoardShow;