import React from 'react';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            // .then(() => {
                // this.props.fetchUser(this.props.pin.user_id)
                //     .then(() => {
                //         this.props.fetchPins()
                //             .then(() => {
                //                 this.props.fetchFollows()
                //             })
                //     })
            // })


        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     window.history.back();
    // }

    render() {
        const {pin} = this.props; 
        if (!pin) return null; 

        return (
            <div>
                {/* <div>{this.props.fetchPin}</div> */}

                <div className='pin-show'>
                    <span>{pin.title}</span>
                    <br/>
                    <span>{pin.details}</span>
                </div>
                <div>
                    <img src={pin.imgUrl} alt=""/>
                </div>
            </div>
        )
    }
}

export default PinShow;