import React from 'react'; 

class Pin extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='pin-wrapper'>
                <div className='pin-container' id={`${this.props.size}`}>
                    <img/>
                </div>
            </div>
        )
    }


}; 


export default Pin; 