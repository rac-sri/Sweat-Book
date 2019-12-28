import {exercise} from './exercises';
import {ui} from './ui';
import {currentWorksout} from './currentWorkout';
import {combineReducers} from 'redux';

export default combineReducers({
  exercise,
  ui,
  currentWorksout,
});
