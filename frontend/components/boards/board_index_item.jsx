import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import BoardItemPins from './board_item_pins';
import BoardModal from '../modal/board_modal';
import { openBoardModal } from '../../actions/board_modal_actions';
import EditIcon from '@mui/icons-material/Edit';
import { fetchPins } from '../../actions/pin_actions';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchPins()
    // }

    render() {
        const { board, deleteBoard, savedPins, pins, currentUser } = this.props;
        if (!board) return null;
        if (!pins || pins.length === 0) return null;
        if (!savedPins) return null;
        let savedArr = Object.values(savedPins).filter(savedPin => savedPin.board_id === board.id)

        let pinCount = savedArr.length;

        let src1, src2, src3

        if (savedArr.length < 1) {
            src1 = null
        } else {
            src1 = pins[savedArr[0].pin_id].imgUrl
        }

        if (savedArr.length < 2) {
            src2 = null
        } else {
            src2 = pins[savedArr[1].pin_id].imgUrl
        }

        if (savedArr.length < 3) {
            src3 = null
        } else {
            src3 = pins[savedArr[2].pin_id].imgUrl
        }


        return (
            <div>
                <BoardModal board={board} boardId={board.id} />
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>
                        <div className='board-cover-container'>
                            <img className="cover1" src={src1} />
                            <div className='board-cover-inner'>
                                <img className="cover2" src={src2} />
                                <img className="cover3" src={src3} />
                            </div>
                        </div>
                    </Link>

                    {board.user_id === currentUser.id ? <div className='hidden-button'>
                        <Link to={`/boards/${board.id}/edit`}><button className="board-edit" ><EditIcon fontSize='small' /></button></Link>
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
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal)),
    // fetchPins: () => dispatch(fetchPins())
});

export default connect(mSTP, mDTP)(BoardIndexItem);