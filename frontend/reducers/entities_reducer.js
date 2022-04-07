import { combineReducers } from 'redux';

import UsersReducer from './usersReducer';
import PinsReducer from './pins_reducer';
import BoardsReducer from './boards_reducer';
import SavedPinsReducer from './saved_pins_reducer'; 
import FollowsReducer from './follows_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    pins: PinsReducer,
    boards: BoardsReducer,
    savedPins: SavedPinsReducer, 
    follows: FollowsReducer
}); 

export default EntitiesReducer