import { SaveAlt } from '@mui/icons-material';
import React from 'react';
import { createSavedPin, deleteSavedPin } from '../../util/saved_pin_api_util';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class SaveMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true })
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    componentDidMount() {
        // this.props.fetchBoards();
        // this.props.fetchSavedPins();
    }


    render() {

        const { currentUser, boards, savedPins, pin, pins, deleteSavedPin, createSavedPin } = this.props;
        const usersBoards = boards.filter(board => board.user_id === currentUser.id);
        const savedArr = Object.values(savedPins);
        const pinBoards = savedArr.filter(savedPin => savedPin.pin_id === pin.id);

        const boardIds = []
        usersBoards.map(usersBoard => {
            boardIds.push(usersBoard.id)
        })

       const currentSaved = savedPins.filter(saved => boardIds.includes(saved.board_id))

        // const savedItem = (pinId) => (
        //     savedArr.findIndex(function (savedPin) {
        //         return savedPin.pin_id === pinId
        //     })
        // )

        const dropMenu = () => {
            const saveStatus = (board) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];

                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id} className="board-save-item-container" onClick={() => deleteSavedPin(pinBoard.id)}>
                                <h3>{board.name}</h3>
                                <button className="board-saved-button" >Saved</button>
                            </div>
                        )
                    }
                }

                return (
                    <div key={board.id} className="board-save-item-container" onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })}>
                        <h3>{board.name}</h3>
                        <button  className="board-save-item-button">Save</button>
                    </div>
                )
            }

            return (
                <div key={pin.id} className="board-dropmenu-container">
                    <h3 className='board-save-title'>Save</h3>
                    <div className="board-save-items">
                        {/* <span>Quick save and organize later</span>
                        <br/>
                        {usersBoards.length === 0 ? 
                            <div className="board-save-item-container" >
                                <h3>Create a board to start</h3>
                            </div> :
                            <div className="board-save-item-container">
                                <h3>Profile</h3>
                                {currentSaved.filter(saved => saved.pin_id === pin.id).length > 0 ?
                                    <button className="board-saved-button">Saved</button> :
                                    <button onClick={() => createSavedPin({ pin_id: pin.id, board_id: usersBoards[0].id })}>Save</button>
                                }
                            </div>
                        } */}
                        
                        <span>All boards</span>
                        <br/>
                        {usersBoards.length === 0 ?
                            <div className="board-save-item-container" >
                                <h3>Your don't have any board</h3>
                            </div> : 
                            usersBoards.map((board, i) => saveStatus(board, i))
                        }
                    </div>
                </div>
            )
        }

        return (
            <div key={pin.id} className="save-menu-container">
                <div className='save-board-wrapper'>
                    <div className="save-board-container" >
                        <button onClick={this.showMenu} className="save-board">Boards</button>
                    </div>
                    <ExpandMoreIcon className="expand-icon" onClick={this.showMenu}/>
                </div>
                {currentSaved.filter(saved => saved.pin_id === pin.id).length > 0 ?
                    <button className="board-saved-button">Saved</button> :
                    <button className="save-button" 
                        onClick={() => createSavedPin({ pin_id: pin.id, board_id: usersBoards[0].id }) }>
                        Save
                    </button>
                }
                
                {this.state.showMenu ? dropMenu() : null}
            </div>
        )
    }
};

export default SaveMenu; 