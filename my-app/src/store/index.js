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

function stateMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                const actionObj = action(store.getState);
                return next(actionObj);
            }
            return next(action);
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, stateMiddleware));

export default store;
