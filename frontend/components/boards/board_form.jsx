import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitBoard(this.state).then(this.props.close).then(this.props.closeBoardModal);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.error.map((error, i) => {
                    return (<li className="error-message-board" key={`error-${i}`}>
                        {error}
                    </li>)
                })}
            </ul>
        );
    }

    render() {
        const createBoard = () => {
            return (
                <div className="board-create" onClick={e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <div className="board-title-container">
                                <div className="board-create-title">Create board</div>
                            </div>
                            <div className="board-body-inputs">
                                <div className="board-label-name">Name:</div>
                                <input className="board-input-name"
                                    type="text"
                                    placeholder={"Like \"Places to Go\" or \"Recipes to Make\""}
                                    value={this.state.name}
                                    onChange={this.update('name')}>
                                </input>
                                {this.renderErrors()}
                                <div className="nav-fil"></div>
                                <div className="board-public-container">
                                    <input className="board-public-check"
                                        type="checkbox"
                                        value={false}
                                        name={this.state.public}
                                        onChange={this.update('public')}>
                                    </input>
                                    <div className="board-label-container">
                                        <div className="board-label-desc">Keep this board secret</div>
                                        <div className="board-label-lower-desc-contain">
                                            <div className="board-lower-desc1">So only you and collaborators can see it.</div>
                                            <div className="board-lower-desc2">Learn more</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-button-contnainer">
                                <button className={this.state.name.length > 0 ? "board-create-filled" : "board-create-button"} type="submit" value={this.props.formType}>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            )

        }

        const editBoard = () => {
            return (
                <div className="board-edit" onClick={e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <div className="edit-modal">
                                <div className="edit-header-container">
                                    <div className="edit-header">Edit your board</div>
                                </div>
                                <div className="edit-modal-body">
                                    <div className="edit-name-container">
                                        <div className="edit-name">Name</div>
                                        <input className="edit-name-input"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.update('name')}>
                                        </input>
                                    </div>
                                    <div className="edit-description-container">
                                        <div className="edit-description">Description</div>
                                        <input className="edit-description-input"
                                            type="text"
                                            value={this.state.details}
                                            onChange={this.update('description')}>
                                        </input>
                                    </div>
                                    <div className="edit-settings-container">
                                        <div className="edit-settings">Settings</div>
                                        <div className="edit-settings-body">
                                            <input className="edit-setting-checkbox"
                                                type="checkbox"
                                                value={false}
                                                id={this.state.public}
                                                name={this.state.public}
                                                onChange={this.update('public')}></input>
                                            <div className="edit-setting-sub">
                                                <div className="edit-setting-desc1">
                                                    Keep this board secret
                                                </div>
                                                <div className="edit-setting-desc2">
                                                    <div className="edit-desc2-sub1">
                                                        So only you and collaborators can see it.
                                                    </div>
                                                    <div className="edit-desc2-sub2">
                                                        Learn more
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="edit-action-container">
                                        <div className="edit-action">Action</div>
                                        <div className="edit-action-delete" onClick={() => this.props.deleteBoard(this.props.board).then(this.props.closeBoardModal)}>Delete Board</div>
                                        <div className="edit-action-desc1">Delete this board and all its Pins forever.</div>
                                        <div className="edit-action-desc2">You can't undo this!</div>
                                    </div>
                                    <div className="edit-submit-container">
                                        <button className="edit-submit-button" type="submit" value={this.props.formType}>Done</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )

        }

        return this.props.formType === 'Create Board' ? createBoard() : editBoard();
    }
}

export default BoardForm;