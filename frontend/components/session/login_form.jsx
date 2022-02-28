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
            <form onSubmit={this.handleSubmit} className="login-form-container">
                Welcome to Pinspire!
                <br />
                <button onClick={this.props.close} className="close-button">X</button>
                {this.renderErrors()}
                <div className="login-form">
                    <br />
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                    <br />
                    <button className="login-button" type="submit" value={this.props.formType}>Log in</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;