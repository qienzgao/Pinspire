import React from 'react';
// import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            age: '', 
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
        const user = Object.assign({}, this.state);
        this.props.submit(user)
            .then(user =>{this.props.loginDemo(user)})
                .then(this.props.close)
    }; 

    handleDemoUser(e) {
        e.preventDefault();
        const demo = {
            email: "OolongTea@email.com", 
            password: "oolongtea", 
        }
        this.setState(demo);
        this.props.loginDemo(demo).then(this.props.close);
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
        // let errors = this.renderError();
        return (
            <form className="signup-form-container" onSubmit={this.handleSubmit}>
                <button onClick={this.props.close} className="close-button">
                    <span>&times;</span>
                </button>
                <div className='pinspire-sign'>
                    <img className="pinspire-img" src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/logo.jpeg"/>
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
                    
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                        placeholder='Create a password'
                    />
                    <span className='errors'>{this.renderError().invalidPass}</span>
                    
                    <input type="integer"
                        value={this.state.age}
                        onChange={this.update('age')}
                        className="signup-input"
                        placeholder='Age'
                    />
                    <span className='errors'>{this.renderError().invalidAge}</span>
                    <button className="signup-button" type="submit">Continue</button>
                    <h3>OR</h3>
                    <button className='login-button' id='demo' onClick={e => this.handleDemoUser(e)}>Continue with DemoLogin</button>
                    <button className='login-button' id='demotea' onClick={e => this.handleDemoUser(e)}>Continue as OolongTea</button>
                    <div className='text-msg'>
                        <span>By continuing, you agree to accept Pinspire's
                            <br />
                            best wish of you being happy, healthy, lucky, lovely,
                            <br />
                            beautiful and brilliant!
                            <br />
                        </span>
                        <span>________________</span>
                    </div>
                    <button className="otherwise" onClick={this.props.login}>
                        Already a member? Log in
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;