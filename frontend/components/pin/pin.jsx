import React from 'react'; 

class Pin extends React.Component {
    constructor(props){
        super(props)
    }

    show(){
        console.log('clicked')
    }

    render() {
        return (
            <div className={`pin-container ${this.props.size}`} onClick={this.show}>
                <img/>
            </div>
        )
    }


}; 


export default Pin; 