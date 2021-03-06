// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchPins } from '../../actions/pin_actions';
// import { fetchBoards } from '../../actions/board_actions';
// import { Link } from 'react-router-dom';

// class BoardItemPins extends React.Component {
//     componentDidMount() {
//         this.props.fetchPins();
//         this.props.fetchBoards();
//     }

//     render() {
//         const { savedPins, board, pins } = this.props;
//         if (!pins) return null;
//         if (Object.values(pins).length < 1) return null;
//         if (!board) return null;

//         let savedArr = Object.values(savedPins);
//         let pinsArr = Object.values(pins);
//         let savedFilter = savedArr.filter(savedPin => savedPin.board_id === board.id)
//         let avatarArr = [];

//         for (let i = 0; i < savedFilter.length && avatarArr.length < 3; i++) {
//             let savedPinItem = savedFilter[i];

//             let pinItem = pinsArr.findIndex(function (pin) {
//                 return pin.id === savedPinItem.pin_id
//             })

//             avatarArr.push(pinsArr[pinItem]);
//         }

//         if (avatarArr.length === 1) {
//             return (
//                 <div className="board-container-img">
//                     <img className="board-img-left" src={avatarArr[0] === undefined ? null : avatarArr[0].imgUrl} />
//                 </div>)

//         } else {
//             return (
//                 <div className="board-container-img"></div>
//             )
//         }
//     }
// }

// const mSTP = (state) => ({
//     pins: state.entities.pins
// })

// const mDTP = dispatch => ({
//     fetchPins: () => dispatch(fetchPins()),
//     fetchBoards: () => dispatch(fetchBoards()),
// })

// export default connect(mSTP, mDTP)(BoardItemPins);