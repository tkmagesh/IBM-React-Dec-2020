//import axios from 'axios';

/* function getLocalBugs(){
    return [
        {
            "id": 1,
            "name": "Local Bug - 1",
            "isClosed": false,
            "createdAt": "2019-09-27T06:34:45.852Z",
        },
        {
            "id": 2,
            "name": "Local Bug - 2",
            "createdAt": "2020-11-26T11:17:31.342Z",
            "isClosed": false,
        }
    ];
} */

/* export function load(){
    return function(dispatch){  //=> invoked by the asyncMiddleware
        const p1 = axios.get('http://localhost:3030/bugs');
        var p2 = p1.then(function(response){
            return response.data;
        });
        p2.then(function(bugs){
            const action = { type : 'BUG_INIT', payload : bugs } ;
            dispatch(action);
        });
    };
} */

//using async await
/* export function load(){
    return async function(dispatch){  //=> invoked by the asyncMiddleware
        const response = await axios.get('http://localhost:3030/bugs');
        const bugs = response.data;
        const action = { type : 'BUG_INIT', payload : bugs } ;
        dispatch(action);
    };
} */

//using promiseMiddleware 
/* export async function load(){
    const response = await axios.get('http://localhost:3030/bugs');
    const bugs = response.data;
    const action = { type : 'BUG_INIT', payload : bugs } ;
    return action;
}  */

//using the promiseMiddleware
//using the bugApi
import bugApi from '../services/bugApi';
export async function load(){
    const bugs = await bugApi.getAll();
    const action = { type : 'BUG_INIT', payload : bugs } ;
    return action;
} 