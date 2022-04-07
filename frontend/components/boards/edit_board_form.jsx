import React from "react";

class EditBoardForm extends React.Component {
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchBoards().then(
        //     () => {  }
        // )
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitBoard(this.state);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        // console.log(this.state)
        const { boards, board, submitBoard, closeBoardModal, deleteBoard} = this.props;
        if (!board) return null;
        // console.log(this.props.board)
        // console.log("props")
        return (
            <div className="edit-board-background">
                <form className="login-form-container" onSubmit={this.handleSubmit} >
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
                                value={board.name}
                                onChange={this.update('name')}>
                            </input>
                        </div>

                        <label className="board-label">Description</label>
                        <input className="board-input"
                            type="text"
                            value={board.details}
                            onChange={this.update('details')}>
                        </input>

                        <label className="board-label">Action</label>
                        <button className="delete-button" onClick={() => this.props.deleteBoard(board)}>
                            <h3>Delete Board</h3>
                            <span>Delete this board and all its Pins forever.</span>
                            <br/>
                            <span>You can't undo this!</span>
                        </button>

                        <div className="create-button-contnainer">
                            <button className="input-filled" type="submit" >Done</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditBoardForm; 