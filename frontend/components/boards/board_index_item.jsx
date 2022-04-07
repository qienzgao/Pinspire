import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import BoardItemPins from './board_item_pins';
import BoardModal from '../modal/board_modal';
import { openBoardModal } from '../../actions/board_modal_actions';
import EditIcon from '@mui/icons-material/Edit';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, deleteBoard, savedPins, pins, currentUser } = this.props;
        if (!board) return null;
        if (!pins) return null;
        if (!savedPins) return null;
        let savedArr = Object.values(savedPins)
        let pinCount = 0;

        for (let i = 0; i < savedArr.length; i++) {
            let savedPin = savedArr[i];
            if (savedPin.board_id === board.id) {
                pinCount += 1;
            }
        }
        return (
            <div>
                <BoardModal board={board} boardId={board.id}/>
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>
                        <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/scaleshape.jpeg"/>
                    </Link>

                    {board.user_id === currentUser.id ? <div className='hidden-button'>
                        <button className="board-edit" onClick={() => this.props.openBoardModal('edit')}><EditIcon fontSize='small' /></button>
                    </div> : null}
                        
                    <h2 className="board-title">{board.name}</h2>
                    <span className="board-count">{pinCount} pins</span>
                </div>              
            </div>

        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal))
});

export default connect(mSTP, mDTP)(BoardIndexItem);