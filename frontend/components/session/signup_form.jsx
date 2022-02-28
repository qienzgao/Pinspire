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
            <form onSubmit={this.handleSubmit} className="signup-form-container">
                Welcome to Pinspire!
                <br />
                <div>Find new ideas to try</div>
                <button onClick={this.props.close} className="close-x">X</button>
                {this.renderErrors()}
                <div className="signup-form">
                    <br />
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('email')}
                        className="signup-input"
                   />
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                    />
                    <br />
                    <input type="integer"
                        value={this.state.age}
                        onChange={this.update('age')}
                        className="signup-input"
                    />
                    <br />
                    <button className="signup-button" type="submit" value={this.props.formType}>Sign up</button>
                </div>
            </form>
        );
    }
}

export default SignupForm;