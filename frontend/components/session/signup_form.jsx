import React from 'react';
// import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            age: ''
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
            <form className="signup-form-container">
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
                {this.renderErrors()}
                <div className="signup-form">
                    <br />
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('email')}
                        className="signup-input"
                        placeholder='Email'
                   />
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                        placeholder='Password'
                    />
                    <br />
                    <input type="integer"
                        value={this.state.age}
                        onChange={this.update('age')}
                        className="signup-input"
                        placeholder='Age'
                    />
                    <button className="signup-button" type="submit" onSubmit={this.handleSubmit} >Continue</button>
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