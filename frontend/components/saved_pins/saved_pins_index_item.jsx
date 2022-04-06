// import React from 'react';
// import { Link } from 'react-router-dom';
// import SaveMenu from './save_menu';

// class SavedPinsIndexItem extends React.Component {

//     render() {
//         const { savedPin, pins } = this.props;

//         if (!pins) return null;
//         if (Object.values(pins).length < 1) return null;

//         const pinsArr = Object.values(pins)

//         let pinItem = pinsArr.findIndex(function (pin) {
//             return pin.id === savedPin.pin_id
//         })

//         return (
//             <div className="save-picture-container">
//                 <div className="save-hover-child"><SaveMenu savedPin={savedPin} pins={pins} /></div>
//                 <Link to={`/pins/${savedPin.pin_id}`} className="pin-link"><img className="save-board-pin" src={pinsArr[pinItem].imgUrl} /></Link>
//             </div>
//         )
//     }

// }

// export default SavedPinsIndexItem;