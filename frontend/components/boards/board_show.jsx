import React from 'react';
import SavedPinsIndex from '../saved_pins/saved_pins_index';
import PinIndexItem from '../pin/pin_index_item';

class BoardShow extends React.Component {
    componentDidMount() {
        this.props.fetchBoards()
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchUsers();
        this.props.fetchSavedPins(); 
        this.props.fetchPins()
    }

    render() {
        const { board, users, savedPins, pins} = this.props;
        if (!users) return null;
        if (!board) return null;

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

        return (
            <div className="show-board">
                <div className="show-board-head">
                    <div className="show-board-title">{board.name}</div>
                    <div className="show-board-avatar"><img src={users[board.user_id].imgUrl} /></div>
                    <div className="show-board-info">
                        <div className="show-board-user">{users[board.user_id].email}</div>
                        <div className="show-dot">·</div>
                        <div className="show-board-desc">{board.details}</div>
                    </div>
                    {filteredPins.map(pin => 
                        <PinIndexItem
                            pin={pin}
                            key={pin.id}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default BoardShow;