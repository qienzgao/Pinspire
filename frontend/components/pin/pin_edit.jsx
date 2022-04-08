import React from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Link } from "react-router-dom";

class PinEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
            .then(this.props.history.push(`/pins/${this.props.pin.id}`));
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value });
        }
    }

    parseEmail(email) {
        let username = '';
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                return username
            } else {
                username += email[i]
            }
        }
        return username
    }


    render() {
        const {user, pin, pins, updatePin, deletePin} = this.props; 
        if (!pin || ! pins ) return null;
        console.log(this.props)
        console.log(this.state)

        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user.imgUrl ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />

        const preview = <div className="preview-container">
            <img className="preview" src={pin.imgUrl} />
        </div>

        // const upload = <div className="upload-wrapper">
        //     <div className='img-upload'>
        //         <ArrowCircleUpRoundedIcon className='upload-icon' />
        //         <span className='drag-text'>Drag and drop or click to upload</span>
        //         <input className="input-button" type="file" onChange={this.handleFile} />
        //     </div>
        // </div>

        return (
            <div className="background">
                {/* <div className='form-wrapper'> */}
                <form className="create-pin-form" onSubmit={this.handleSubmit}>
                    <div className='submit-create'>
                        <button className="create-button" type="submit" >Save</button>
                    </div>
                    <br />

                    <div className='img-container'>
                        {preview}
                    </div>
                    <br />


                    <div className='title-container'>
                        <input type="text"
                            defaultValue={pin.title}
                            onChange={this.update('title')}
                            className="title-input"
                            // placeholder='Add your title'
                        />
                        <br />
                        {/* <span className='title-reminder'>Your first 40 characters are what usually show up in feeds</span> */}
                        <br />
                    </div>

                    <div className='user-display'>
                        {avatar}
                        <h3 className='email-display'>{this.parseEmail(user.email)}</h3>
                    </div>

                    <div className="details-container">
                        <input type="text"
                            defaultValue={pin.details}
                            onChange={this.update('details')}
                            className="details-input"
                            // placeholder='Tell everyone what your pin is about'
                        />
                    </div>
                </form>

            </div>
        );
    }
}


export default PinEdit;