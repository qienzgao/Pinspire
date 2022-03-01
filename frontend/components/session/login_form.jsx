import React from 'react';
// import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.close);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <form className="login-form-container">
                <button onClick={this.props.close} className="close-button">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className='pinspire-sign'>
                    <div className='pinspire-img'>
                        logo
                    </div>
                </div>
                <br/>
                <div className='form-title'>
                    <h1>Welcome to Pinspire</h1>
                </div>
                {this.renderErrors()}
                <div className="login-form">
                    <br />
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder='Email'
                    />
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder='Password'
                    />
                    <br />
                    <div className='forget'>
                        <label>Forgot your password?</label>
                    </div>
                    <br />
                    <button className="login-button" type="submit" onClick={this.handleSubmit}>Log in</button>
                    <br />
                    <h3>OR</h3>
                    <button>Demo log in</button>
                    {this.props.signup}
                </div>
            </form>
        );
    }
}

export default LoginForm;