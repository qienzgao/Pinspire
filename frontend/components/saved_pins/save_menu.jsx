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

        const { currentUser, boards, savedPins, pin, pins, createPinstoboard, deletePinstoboard } = this.props;
        const dropMenu = () => {
            let usersBoards = boards.filter(board => board.user_id === currentUser.id)
            let pinBoards = savedPins.filter(pinBoard => pin.id === pinBoard.pin_id)
            let savedArr = Object.values(savedPins);

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
                    <div key={board.id} className="board-save-item-container" >
                        <h3>{board.name}</h3>
                        <button onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })} className="board-save-item-button">Save</button>
                    </div>
                )
            }

            return (
                <div key={pin.id} className="board-dropmenu-container">
                    <h3 className='board-save-title'>Save</h3>
                    <div className="board-save-items">
                        <span>Quick save and organize later</span>
                        <br/>
                        <div className="board-save-item-container">
                            <h3>Profile</h3>
                            {savedArr[savedItem(pin.id, currentUser.id)] ?
                                <button onClick={() => deleteSavedPin(savedArr[savedItem(pin.id, currentUser.id)].id)} className="board-saved-button" >Saved</button> :
                                <button onClick={() => createSavedPin({ pin_id: pin.id })}>Save</button>
                            }
                        </div>
                        <span>Save to board</span>
                        <br/>
                        {usersBoards.map((board, i) => saveStatus(board, i))}
                    </div>
                </div>
            )
        }

        let savedArr = Object.values(savedPins);

        const savedItem = (pinId) => (
            savedArr.findIndex(function (savedPin) {
                return savedPin.pin_id === pinId
            })
        )

        return (
            <div key={pin.id} className="save-menu-container">
                <div className='save-board-wrapper'>
                    <div className="save-board-container" >
                        <button onClick={this.showMenu} className="save-board">Profile</button>
                    </div>
                    <ExpandMoreIcon className="expand-icon" onClick={this.showMenu}/>
                </div>
                {savedArr[savedItem(pin.id, currentUser.id)] ?
                <button className="save-button" onClick={() => deleteSavedPin(savedArr[savedItem(pin.id, currentUser.id)].id)}>Saved</button> :
                <button className="save-button" onClick={() => createSavedPin({ pin_id: pin.id})}>Save</button>}

                {this.state.showMenu ? dropMenu() : null}
            </div>
        )
    }
};

export default SaveMenu; 