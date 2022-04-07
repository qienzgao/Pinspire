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


    render() {
        return (
            <form className="login-form-container" onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                <button onClick={this.props.closeBoardModal} className="close-button">
                        <span aria-hidden="true">&times;</span>
                </button>
                <div className='board-form-container'>
                    <div className="board-form-title">
                        <h2>Create board</h2>
                    </div>
                    <div className="board-form-body">
                        <label className="board-label">Name</label>
                        <input className="board-input"
                            type="text"
                            placeholder={"Like \"Places to Go\" or \"Recipes to Make\""}
                            value={this.state.name}
                            onChange={this.update('name')}>
                        </input>
                        <br/>

                        <label className="board-label">Details</label>
                        <input className="board-input"
                            type="text"
                            placeholder="Describe your board"
                            value={this.state.details}
                            onChange={this.update('details')}>
                        </input>

                        {/* <input className="public-check"
                            type="checkbox"
                            value={false}
                            name={this.state.public}
                            onChange={this.update('public')}>
                        </input>
                        
                        <h3 className="board-label-desc">Keep this board secret</h3>
                        <span className="board-lower-desc1">So only you and collaborators can see it.</span> */}

                    </div>
                    <div className="create-button-contnainer">
                        <button className={this.state.name.length > 0 ? "input-filled" : "input-empty"} type="submit" value={this.props.formType}>Create</button>
                    </div>
                </div>
            </form>
            )
    }
}

export default BoardForm;