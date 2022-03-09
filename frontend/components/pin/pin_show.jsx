import React from 'react';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                this.props.fetchUser(this.props.pin.user_id)
            })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        window.history.back();
    }

    render() {
        const {pin, user} = this.props; 
        if (!pin || !user) return null; 

        return (
            <div>
                {/* <div>{this.props.fetchPin}</div> */}

                <div className='pin-show'>
                    <h2>{pin.title}</h2>
                    <br/>
                    <h3>{pin.details}</h3>
                </div>

                <div>
                    <h3>{user[pin.user_id].email}</h3>
                </div>

                <div>
                    <img src={pin.imgUrl} alt=""/>
                </div>
                
            </div>
        )
    }
}

export default PinShow;