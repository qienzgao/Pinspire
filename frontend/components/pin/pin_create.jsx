import React from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Link } from "react-router-dom";


class PinCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            details: '',
            user_id: this.props.user.id, 
            imgFile: null, 
            imgUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this); 
    }

    create(field){
        return ( e => this.setState({
            [field]: e.currentTarget.value
        })); 
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

    handleSubmit(e){
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[details]', this.state.details);
        formData.append('pin[user_id]', this.state.user_id);

        if (this.state.imgFile) {
            formData.append('pin[img]', this.state.imgFile)
        }; 

        this.props.submit(formData)
                .then((savedPin) => {
                    this.props.history.push(`/pins/${savedPin.pin.id}`)
                });
            }

    handleFile(e) {
        e.preventDefault(); 
        const file = e.currentTarget.files[0]; 
        const fileReader = new FileReader(); 
        fileReader.onloadend = () => {
            this.setState({imgFile: file, imgUrl: fileReader.result})
        }; 
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const user = this.props.user
        const defaultAvatar = "https://pinspire-seeds.s3.us-east-1.amazonaws.com/defaultavatar.png";
        const avatar = user.imgUrl ? <img className='avatar' src={user.imgUrl} /> : <img className='avatar-default' src={defaultAvatar} />

        const preview = <div className="preview-container">
            <img className="preview" src={this.state.imgUrl} />
        </div>

        const upload = <div className="upload-wrapper">
            <div className='img-upload'>
                <ArrowCircleUpRoundedIcon className='upload-icon'/>
                <span className='drag-text'>Drag and drop or click to upload</span>
                <input className="input-button" type="file" onChange={this.handleFile} />
            </div>
        </div>

        return (
            <div className="background">
                {/* <div className='form-wrapper'> */}
                <form className="create-pin-form" onSubmit={this.handleSubmit}>
                    <div className='submit-create'>
                        <button className="create-button" type="submit">Save</button>
                    </div>
                    <br />
                    
                        <div className='img-container'>
                            {this.state.imgUrl ? preview : upload}
                        </div>
                        <br />

                    
                        <div className='title-container'>
                            <input type="text"
                                value={this.state.title}
                                onChange={this.create('title')}
                                className="title-input"
                                placeholder='Add your title'
                            />
                            <br />
                            {/* <span className='title-reminder'>Your first 40 characters are what usually show up in feeds</span> */}
                            <br/>
                        </div>

                        <div className='user-display'>
                            {avatar}
                            <h3 className='email-display'>{this.parseEmail(user.email)}</h3>
                        </div>

                        <div className="details-container">
                            <input type="text"
                                value={this.state.details}
                                onChange={this.create('details')}
                                className="details-input"
                                placeholder='Tell everyone what your pin is about'
                            />
                        </div>
                </form>
                
            </div>
        );
    }
}


export default PinCreate;