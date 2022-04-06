import React from 'react'; 
import { Link } from 'react-router-dom';
import SaveMenuContainer from '../saved_pins/save_menu_container';
import {connect} from 'react-redux'
import {fetchBoards} from '../../actions/board_actions'

class PinIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchBoards()
    // }

    render() {
        return (
            <div className={`pin-container ${this.props.size}`}>
                <Link to={`/pins/${this.props.pin.id}`}>
                    <div className='hidden-button'>
                        <SaveMenuContainer pin={this.props.pin} board={this.props.board}/>
                    </div>
                    <img className="pin-img" src={this.props.pin.imgUrl}/>
                </Link>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
})


export default connect(null, mDTP)(PinIndexItem); 