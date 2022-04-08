import React from 'react'; 
import { Link } from 'react-router-dom';
import SaveMenuContainer from '../saved_pins/save_menu_container';
import {connect} from 'react-redux'
import {fetchBoards} from '../../actions/board_actions';
import EditIcon from '@mui/icons-material/Edit';

class PinIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchBoards()
    // }

    render() {
        const {pin, currentUser} = this.props; 
        return (
            <div className={`pin-container ${this.props.size}`}>
                <div className='hidden-button'>
                    <SaveMenuContainer pin={this.props.pin} board={this.props.board}/>
                </div>
                
                <Link to={`/pins/${this.props.pin.id}`}>
                    <img className="pin-img" src={this.props.pin.imgUrl}/>
                </Link>

                {pin.user_id === currentUser.id ? <div className='hidden-edit'>
                    <Link to={`/pins/${pin.id}/edit`}><button className="pin-edit" ><EditIcon fontSize='small' /></button></Link>
                </div> : null}

            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
})


export default connect(mSTP, mDTP)(PinIndexItem); 