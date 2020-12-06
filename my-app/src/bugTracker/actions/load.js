import axios from 'axios';

function getLocalBugs(){
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
}

export function load(){
    const bugs = getLocalBugs();
    const action = { type : 'BUG_INIT', payload : bugs } ;
    return action;
}