import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';

import * as bugActionCreators from './bugTracker/actions';
import * as projectActionCreators from './projects/actions';

import store from './store';

import BugTracker from './bugTracker';
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);
const projectActionDispatchers = bindActionCreators(
  projectActionCreators,
  store.dispatch
);


function renderApp() {
  const storeState = store.getState();
  const bugs = storeState.bugState;
  const projects = storeState.projectState;

  ReactDOM.render(
    <React.StrictMode>
      <h1>My App</h1>
      <Projects projects={projects} {...projectActionDispatchers} />
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
renderApp();
store.subscribe(renderApp);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ES6 Modules Examples

/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from "./calc";
//const add = calculator.add;
const { add } = calculator;
console.log(add(10,20)); 
*/

/* 
import { add } from "./calc";
console.log(add(10, 20)); 
*/

//importing the default exported entity
/* import calculator from './calc';
console.log(calculator);
 */

//importing the default exported and regular exported entities together
//import calculator, { add } from './calc';
