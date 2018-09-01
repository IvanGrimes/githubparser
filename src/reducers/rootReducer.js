import { combineReducers } from 'redux';
import Account from './accountReducers';
import ReposList from './repositoriesReducers';

const rootReducer = combineReducers({
  account: Account,
  reposlist: ReposList,
});

export default rootReducer;
