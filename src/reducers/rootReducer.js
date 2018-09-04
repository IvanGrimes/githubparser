import { combineReducers } from 'redux';
import repositories from './repositories';

const rootReducer = combineReducers({
  repositories: repositories,
});

export default rootReducer;
