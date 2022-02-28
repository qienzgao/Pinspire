import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer'
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  session: SessionReducer, 
  entities: EntitiesReducer, 
  errors: ErrorsReducer,
  modal: ModalReducer
});

export default RootReducer;