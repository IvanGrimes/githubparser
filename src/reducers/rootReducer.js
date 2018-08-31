import { combineReducers } from 'redux';
import Account from './Account';
import ReposList from './ReposList';

const rootReducer = combineReducers({
  account: Account,
  reposlist: ReposList,
});

export default rootReducer;
