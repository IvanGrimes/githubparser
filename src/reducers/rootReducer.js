import { combineReducers } from 'redux';
import Account from './Account';

const rootReducer = combineReducers({
  account: Account,
});

export default rootReducer;
