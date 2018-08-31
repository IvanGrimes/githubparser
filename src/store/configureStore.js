import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const store = createStore(() => {}, applyMiddleware(thunk, logger));

export default store;
