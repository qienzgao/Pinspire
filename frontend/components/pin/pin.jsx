import React from 'react'; 

class Pin extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='pin-container' id={`${this.props.size}`}>
                <img/>
            </div>
        )
    }


}; 


export default Pin; 