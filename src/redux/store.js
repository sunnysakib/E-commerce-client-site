import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducer from './root-reducer';

const middleware = [logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;