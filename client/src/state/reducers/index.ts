import { combineReducers } from 'redux';
import stringReducer from './stringReducer';

const reducers = combineReducers({
  trivial: stringReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
