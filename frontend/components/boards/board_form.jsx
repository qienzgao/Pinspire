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
                <div className="login-form-container" onClick={e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} >
                    <button onClick={this.props.closeBoardModal} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        <div>
                            <h1 className="form-title">Edit your board</h1>
                                <div className="login-form">
                                    <br/>
                                    <label className="edit-name">Name</label>
                                    <input className="edit-name-input"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update('name')}>
                                    </input>
                                    </div>
                                    <br/>
                                    <label className="edit-description">Description</label>
                                    <input className="edit-description-input"
                                        type="text"
                                        value={this.state.details}
                                        onChange={this.update('details')}>
                                    </input>
                                    <br/>
                                    <label className="edit-settings">Settings</label>
                                    <input className="edit-setting-checkbox"
                                        type="checkbox"
                                        value={false}
                                        onChange={this.update('public')}>
                                    </input>
                                    <br/>        
                                    <h3 className="edit-setting-desc1">Keep this board secret</h3>    
                                    <span className="edit-desc2-sub1">
                                        So only you and collaborators can see it.
                                    </span>
                                    <br/>         
                                    <label className="edit-action">Action</label>
                                    <button className="edit-action-delete" onClick={() => this.props.deleteBoard(this.props.board).then(this.props.closeBoardModal)}>
                                        <h3>Delete Board</h3>
                                        <h4>Delete this board and all its Pins forever.</h4>
                                        <br/>
                                        <h4>You can't undo this!</h4>
                                    </button>
                                    
                                    <div className="edit-submit-container">
                                        <button className="edit-submit-button" type="submit" value={this.props.formType}>Done</button>
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