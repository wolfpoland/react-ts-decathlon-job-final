import { combineReducers } from 'redux'

import sessionReducer from './session-reducer';
import tracksReducer from './tracks-reducer';
import playerReducer from './player-reducer';

const rootReducer = combineReducers({
  sessionReducer,
  tracksReducer,
  playerReducer
});

export default rootReducer;