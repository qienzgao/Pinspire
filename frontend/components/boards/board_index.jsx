import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchSavedPins();
        this.props.fetchPins();
    }

    render() {
        const { boards, deleteBoard, user_id, savedPins, pins } = this.props;
        let boardsArr = Object.values(boards);
        let profileBoardsArr = boardsArr.filter(board => board.user_id === user_id);

        return (
            
            <div className='board-wrapper'>
                {profileBoardsArr.map(board => <BoardIndexItem
                    pins={pins}
                    board={board}
                    deleteBoard={deleteBoard}
                    key={board.id}
                    savedPins={savedPins}/>
                )}
            </div>
        )
    }
}

export default BoardIndex;