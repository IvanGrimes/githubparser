import { combineReducers } from 'redux';
import repositoriesReducers from './repositoriesReducers';

const rootReducer = combineReducers({
  repositories: repositoriesReducers,
});

export default rootReducer;
