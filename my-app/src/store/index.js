import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('Before -> ', store.getState());
            console.log('Action -> ', action);
            next(action);
            console.log('After  -> ', store.getState());
            console.groupEnd();
            
        }
    }
}

function asyncMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(dispatch, getState);                
            }
            return next(action);
        }
    }
}

const promiseMiddleware = ({dispatch, getState}) => next => async action => {
    if (action instanceof Promise){
        const actionObj = await action;
        return dispatch(actionObj);
    }
    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, asyncMiddleware, promiseMiddleware));

export default store;
