import React from 'react';
import SavedPinsIndex from '../saved_pins/saved_pins_index_container';

class BoardShow extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchUsers();
    }

    render() {
        const { board, users} = this.props;
        if (!users) return null;
        if (!board) return null;

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
                    {/* <SavedPinsIndex board={board} /> */}
                </div>
            </div>
        )
    }
}

export default BoardShow;