import React from "react";

class EditBoardForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = this.props.board; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitBoard(this.state)
            .then(this.props.history.push(`/users/${this.props.board.user_id}`));
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        const {board, deleteBoard} = this.props;
        if (!board) return null;

        return (
            <div className="edit-board-background">
                <form className="login-form-container" >
                    {/* <button onClick={this.props.closeBoardModal} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </button> */}
                    <div className='board-form-container'>
                        <div className="board-form-title">
                            <h2>Edit your board</h2>
                        </div>
                        <div className="board-form-body">
                            <label className="board-label">Name</label>
                            <input className="board-input"
                                type="text"
                                defaultValue={board.name}
                                onChange={this.update('name')}>
                            </input>
                        </div>

                        <label className="board-label">Description</label>
                        <input className="board-input"
                            type="text"
                            defaultValue={board.details}
                            onChange={this.update('details')}>
                        </input>

                        <label className="board-label">Action</label>
                        <button className="delete-button" onClick={() => deleteBoard(board.id).then(this.props.history.push(`/users/${this.props.board.user_id}`))}>
                            <h3>Delete Board</h3>
                            <span>Delete this board and all its Pins forever.</span>
                            <br/>
                            <span>You can't undo this!</span>
                        </button>

                        <div className="create-button-contnainer">
                            <button className="input-filled" type="submit" onClick={this.handleSubmit}>Done</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditBoardForm; 