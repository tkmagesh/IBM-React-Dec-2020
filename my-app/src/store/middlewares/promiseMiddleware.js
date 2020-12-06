export const promiseMiddleware = ({dispatch, getState}) => next => async action => {
    if (action instanceof Promise){
        const actionObj = await action;
        return dispatch(actionObj);
    }
    return next(action);
}