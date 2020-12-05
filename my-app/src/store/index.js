import { createStore } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';

//const store = createStore(bugsReducer);
const store = createStore(projectsReducer);

export default store;
