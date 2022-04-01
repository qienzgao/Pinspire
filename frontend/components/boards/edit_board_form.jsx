import React from "react";

class EditBoardForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = this.props.board
        console.log(this.props)
        console.log("durian")
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBoard(this.props.match.params.boardId)
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

    render() {
        // console.log(this.state)
        const { board, formType, submitBoard, closeBoardModal, deleteBoard} = this.props;
        if (!board) return null;
    
        return (
            <div className="login-form-container" onClick={e => e.stopPropagation()}>
                <form onSubmit={this.handleSubmit} >
                    <button onClick={this.props.closeBoardModal} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div>
                        <h1 className="form-title">Edit your board</h1>
                        <div className="login-form">
                            <br />
                            <label className="edit-name">Name</label>
                            <input className="edit-name-input"
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}>
                            </input>
                        </div>
                        <br />
                        <label className="edit-description">Description</label>
                        <input className="edit-description-input"
                            type="text"
                            value={this.state.details}
                            onChange={this.update('details')}>
                        </input>
                        <br />
                        <label className="edit-settings">Settings</label>
                        <input className="edit-setting-checkbox"
                            type="checkbox"
                            value={false}
                            onChange={this.update('public')}>
                        </input>
                        <br />
                        <h3 className="edit-setting-desc1">Keep this board secret</h3>
                        <span className="edit-desc2-sub1">
                            So only you and collaborators can see it.
                        </span>
                        <br />
                        <label className="edit-action">Action</label>
                        <button className="edit-action-delete" onClick={() => this.props.deleteBoard(this.props.board).then(this.props.closeBoardModal)}>
                            <h3>Delete Board</h3>
                            <h4>Delete this board and all its Pins forever.</h4>
                            <br />
                            <h4>You can't undo this!</h4>
                        </button>

                        <div className="edit-submit-container">
                            <button className="edit-submit-button" type="submit" value={this.props.formType}>Done</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditBoardForm; 