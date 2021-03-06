import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer'
import { combineReducers } from 'redux';
import boardModalsReducer from './board_modal_reducer';
import followsReducer from './follows_reducer';
import SavedPinsReducer from './saved_pins_reducer';

const RootReducer = combineReducers({
  session: SessionReducer, 
  entities: EntitiesReducer, 
  errors: ErrorsReducer,
  modal: ModalReducer, 
  boardModal: boardModalsReducer, 
  follows: followsReducer, 
  savedPins: SavedPinsReducer
});

export default RootReducer;