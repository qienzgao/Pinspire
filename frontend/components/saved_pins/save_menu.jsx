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
                            <div key={board.id} className="pin-item-save" >
                                <h3>{board.name}</h3>
                                <button className="pin-inner-unsave" onClick={() => deleteSavedPin(pinBoard.id)}>Saved</button>
                            </div>
                        )
                    }
                }

                return (
                    <div key={board.id} className="pin-item-save" >
                        <h3>{board.name}</h3>
                        <button onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })} className="pin-inner-button">Save</button>
                    </div>
                )
            }

            return (
                <div key={pin.id} className="pin-drop-menu">
                    <div className="pin-menu-body">
                        <div className="pin-menu-items">
                            {usersBoards.map((board, i) => saveStatus(board, i))}
                        </div>
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
                    <ExpandMoreIcon onClick={this.showMenu}/>
                </div>
                {this.state.showMenu ? dropMenu() : null}

                {savedArr[savedItem(pin.id, currentUser.id)] ?
                <button className="save-button" onClick={() => deleteSavedPin(savedArr[savedItem(pin.id, currentUser.id)].id)}>Saved</button> :
                <button className="save-button" onClick={() => createSavedPin({ pin_id: pin.id})}>Save</button>}
                
            </div>
        )
    }
};

export default SaveMenu; 