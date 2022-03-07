import React from 'react';

class PinCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            details: '', 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    create(field){
        return ( e => this.setState({
            [field]: e.currentTarget.value
        })); 
    }

    handleSubmit(e){
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[details]', this.state.details);
        formData.append('pin[user_id]', this.props.user.id);
    }

    render() {
        return (
            <form className="create-pin-form" onSubmit={this.handleSubmit}>
                <div className='submit-create'>
                    <button className="create-button" type="submit">Save</button>
                </div>
                <br />
                <div className="create-pin-container">
                    <div className='img-container'>
                        <div className='img-upload'>
                            <span>upload img here</span>
                        </div>
                    </div>
                    <br />
                    <div className='title-container'>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.create('title')}
                            className="title-input"
                            placeholder='Add your title'
                        />
                        <span className='title-reminder'>Your first 40 characters are what usually show up in feeds</span>
                    </div>

                    <div className='user-display'>
                        {/* <h3>{this.props.currentUser.email}</h3> */}
                    </div>

                    <input type="text"
                        value={this.state.details}
                        onChange={this.create('details')}
                        className="details-input"
                        placeholder='Tell everyone what your pin is about'
                    />

                </div>
            </form>
        );
    }
}


export default PinCreate;