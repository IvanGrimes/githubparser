import { combineReducers } from 'redux';
import accountReducers from './accountReducers';
import repositoriesReducers from './repositoriesReducers';

const rootReducer = combineReducers({
  account: accountReducers,
  repositories: repositoriesReducers,
});

export default rootReducer;
