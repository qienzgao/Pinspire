import React from 'react';
// import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            age: '',
            username: '', 
            invalidEmail: '',
            invalidPass: '',
            invalidAge: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderError = this.renderError.bind(this); 
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.renderError();
        const user = Object.assign({}, this.state);
        this.props.submit(user).then(this.props.close);
        this.setState({
            username: this.state.email
        })
    }

    renderError() {
        let errorMSG = {
            invalidEmail: '',
            invalidPass: '',
            invalidAge: ''
        };
        this.props.errors.map((error) => {
            if (error.includes('Password')) {
                errorMSG['invalidPass'] = error
            } else if (error.includes('Email')) {
                errorMSG['invalidEmail'] = error
            } else if (error.includes('Age')) {
                errorMSG['invalidAge'] = error
            }
            return errorMSG; 
        })
        return errorMSG; 
    }

    render() {
        return (
            <form className="signup-form-container" onSubmit={this.handleSubmit}>
                <button onClick={this.props.close} className="close-button">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className='pinspire-sign'>
                    <img className="pinspire-img" />
                </div>
                <br />
                <div className='form-title'>
                    <h1>Welcome to Pinspire</h1>
                    <h3 id="find-ideas">Find new ideas to try</h3>
                </div>
                <div className="signup-form">
                    <br />
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signup-input"
                        placeholder='Email'
                   />
                    <span className='errors'>{this.renderError().invalidEmail}</span>
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                        placeholder='Password'
                    />
                    <span className='errors'>{this.renderError().invalidPass}</span>
                    <br />
                    <input type="integer"
                        value={this.state.age}
                        onChange={this.update('age')}
                        className="signup-input"
                        placeholder='Age'
                    />
                    <span className='errors'>{this.renderError().invalidAge}</span>
                    <button className="signup-button" type="submit">Continue</button>
                    <h3>OR</h3>
                    <button className='login-button' id='demo'>Continue with DemoLogin</button>
                    <button className='login-button' id='demotea'>Continue as OolongTea</button>
                    <div className='text'>
                        <span>By continuing, you agree to accept Pinspire's
                            <br />
                            best wish of you being happy, healthy, lucky, lovely,
                            <br />
                            beautiful and brilliant!
                            <br />
                        </span>
                        <span>________________</span>
                    </div>
                    {this.props.login}
                </div>
            </form>
        );
    }
}

export default SignupForm;