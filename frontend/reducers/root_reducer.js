import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer'
import { combineReducers } from 'redux';
import boardModalReducer from './board_modal_reducer';


const RootReducer = combineReducers({
  session: SessionReducer, 
  entities: EntitiesReducer, 
  errors: ErrorsReducer,
  modal: ModalReducer, 
  boardModal: boardModalReducer
});

export default RootReducer;