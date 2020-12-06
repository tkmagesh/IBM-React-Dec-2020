//replica of the redux-thunk middleware
export function asyncMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(dispatch, getState);                
            }
            return next(action);
        }
    }
}