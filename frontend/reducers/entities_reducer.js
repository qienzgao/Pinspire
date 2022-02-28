import { combineReducers } from 'redux';

import UsersReducer from './usersReducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer
}); 

export default EntitiesReducer