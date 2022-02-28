import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  sessions: SessionReducer, 
  entities: EntitiesReducer, 
  errors: ErrorsReducer
});

export default RootReducer;