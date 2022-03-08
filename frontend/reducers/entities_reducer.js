import { combineReducers } from 'redux';

import UsersReducer from './usersReducer';
import PinsReducer from './pins_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    pins: PinsReducer
}); 

export default EntitiesReducer