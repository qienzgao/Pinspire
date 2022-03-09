import React from 'react'; 
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={`pin-container ${this.props.size}`}>
                <Link to={`/pins/${this.props.pin.id}`}>
                    <img className="pin-img" src={this.props.pin.imgUrl}/>
                </Link>
            </div>
        )
    }

}; 


export default PinIndexItem; 