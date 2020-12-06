import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
});

export default rootReducer;
