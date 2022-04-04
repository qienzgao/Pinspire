import { SaveAlt } from '@mui/icons-material';
import React from 'react';
import { createSavedPin, deleteSavedPin } from '../../util/saved_pin_api_util';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

            console.log(this.props)

            const saveStatus = (board) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];

                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id} className="pin-item-save" onClick={() => deleteSavedPin(pinBoard.id)}>
                                <div className="pin-test123">{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="pin-inner-unsave">Saved</button>
                            </div>
                        )
                    }
                }

                let pinItem;
                for (let i = 0; i < savedArr.length; i++) {
                    if (savedArr[i].board_id === board.id) {
                        pinItem = savedArr[i];
                        return (
                            <div key={board.id} className="pin-item-save" onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })}>
                                <div>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="pin-inner-button">Save</button>
                            </div>
                        )
                    }
                }

                return (
                    <div key={board.id} className="pin-item-save" onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })}>
                        <div className="pin-avatar"></div>
                        <div>{board.name}</div>
                        <div className="nav-fil"></div>
                        <button className="pin-inner-button">Save</button>
                    </div>
                )
            }

            return (
                <div key={pin.id} className="pin-drop-menu">
                    <div className="pin-menu-body">
                        <div className="pin-allboards">All boards</div>
                        <div className="pin-menu-item-container">
                            <div className="pin-menu-items">
                                {usersBoards.map((board, i) => saveStatus(board, i))}
                            </div>
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
                <div className="pin-drop-sub" onClick={this.showMenu}>
                    <div className="pin-sub-title">Profile</div>
                    <div className="pin-drop-header">expand</div>
                </div>

                {this.state.showMenu ? dropMenu() : null}

                {savedArr[savedItem(pin.id, currentUser.id)] ?
                <button className="save-button" onClick={() => deleteSavedPin(savedArr[savedItem(pin.id, currentUser.id)].id)}>Saved</button> :
                <button className="save-button" onClick={() => createSavedPin({ pin_id: pin.id, board_id: null })}>Save</button>}
                
            </div>
        )
    }
};

export default SaveMenu; 