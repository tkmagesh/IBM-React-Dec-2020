/* 
import { loggerMiddleware} from './loggerMiddleware';
import { asyncMiddleware } from './asyncMiddleware'; 
*/
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { promiseMiddleware } from './promiseMiddleware';
import { applyMiddleware } from 'redux';

const middlewareChain = applyMiddleware(logger, thunk, promiseMiddleware );
export default middlewareChain;
