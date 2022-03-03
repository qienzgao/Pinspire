import React from 'react';
// import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderError = this.renderError.bind(this); 
    }

    componentWillUnmount(){
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
    }

    renderError() {
        let error = {
            invalidEmail: '',
            invalidPass: ''
        }
        this.setState(error); 
        error = {}; 
        if(!this.state.email.includes("@" && ".")) {
            error['invalidEmail'] = `Hmm...that doesn't look like an email address.`
        } else if (!this.state.email || !this.state.password) {
            error['invalidPass'] = `You missed a spot!`
        }
        this.setState(error); 
    }

    
    render() {
        const errors = this.props.errors[0] && !this.state.invalidPass ? this.props.errors[0] : null;
        return (
            <form className="login-form-container" onSubmit={this.handleSubmit}>
                <button onClick={this.props.close} className="close-button">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className='pinspire-sign'>
                    <img className="pinspire-img"/>
                </div>
                <br/>
                <div className='form-title'>
                    <h1>Welcome to Pinspire</h1>
                </div>
                <div className="login-form">
                    <br />
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder='Email'
                    />
                    <span className='errors'>{this.state.invalidEmail}</span>
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder='Password'
                    />
                    <span className='errors'>{this.state.invalidPass}</span>
                    <span className='errors'>{errors}</span>
                    <br />
                    <div className='forget'>
                        <label>Forgot your password?</label>
                    </div>
                    <button className="login-button" type="submit">Log in</button>
                    <br />
                    <h3>OR</h3>
                    <button className='login-button' id='demo'>Continue with DemoLogin</button>
                    <button className='login-button' id='demotea'>Continue as OolongTea</button>
                    <div className='text'>
                        <span>By continuing, you agree to accept Pinspire's 
                            <br/>
                            best wish of you being happy, healthy, lucky, lovely, 
                            <br/>
                            beautiful and brilliant!
                            <br />
                        </span>
                        <span>________________</span>
                    </div>
                    {this.props.signup}
                </div>
            </form>
        );
    }
}

export default LoginForm;