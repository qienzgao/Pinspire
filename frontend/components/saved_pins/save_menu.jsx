import React from 'react';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class SaveMenu extends React.Component {
    constructor() {
        super();
        this.state = { show: false };

        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchSavedPins();
    }

    show(e) {
        e.preventDefault();
        this.state.show ? this.setState({ show: false }) : this.setState({ show: true })
    }

    close(e) {
        e.preventDefault();
        this.setState({ show: false })
    }

    render() {
        const { currentUser, boards, savedPins, savedPin, pins, createSavedPin, deleteSavedPin } = this.props;
        if (!pins) return null;

        const dropMenu = () => {
            let usersBoards = boards.filter(board => board.user_id === currentUser.id)
            let pinBoards = savedPins.filter(pinBoard => savedPin.pin_id === pinBoard.pin_id)
           

            const saveStatus = (board) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];

                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id} className="save-item-save">
                                <div className="save-avatar"><img className="save-avatar-img" src={pins[savedPin.pin_id].imgUrl} /></div>
                                <div onClick={() => deleteSavedPin(pinBoard.id)}>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="save-inner-unsave">Unsave</button>
                            </div>
                        )
                    }
                }

                let savedArr = Object.values(savedPins);
                let pinItem;
                for (let i = 0; i < savedArr.length; i++) {
                    if (savedArr[i].board_id === board.id) {
                        pinItem = savedArr[i];
                        return (
                            <div key={board.id} className="save-item-save" onClick={() => createPinstoboard({ pin_id: savedPin.pin_id, board_id: board.id })}>
                                <div className="save-avatar"><img className="save-avatar-img" src={pins[pinItem.pin_id].imgUrl} /></div>
                                <div>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="save-inner-button">Save</button>
                            </div>
                        )
                    }
                }


                return (<div key={board.id} className="save-item-save" onClick={() => createPinstoboard({ pin_id: savedPin.pin_id, board_id: board.id })}>
                    <div className="save-avatar"></div>
                    <div>{board.name}</div>
                    <div className="nav-fil"></div>
                    <button className="save-inner-button">Save</button>
                </div>)
            }

            return (
                <div key={ptb.id} className="save-drop-menu">
                    <div className="save-menu-header">Save</div>
                    <div className="save-menu-body">
                        <div className="save-allboards">All boards</div>
                        <div className="save-menu-item-container">
                            <div className="save-menu-items">
                                {usersBoards.map((board) => saveStatus(board))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div key={ptb.id} className="save-drop">
                <div className="save-drop-container">
                    <div className="save-drop-sub" onClick={this.show}>
                        <div className="save-sub-title">Choose board</div>
                        <div className="save-drop-header">more</div>
                        <button className="save-button">Save</button>
                    </div>
                </div>
                {this.state.show ? dropMenu() : null}
            </div>
        )
    }
};

export default SaveMenu; 