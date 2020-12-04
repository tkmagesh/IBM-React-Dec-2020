var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = null,
        _init_action = { type : '@@INIT-ACTION'};

    function getState(){
        return _currentState
    }

    function subscribe(callback){
        _callbacks.push(callback)
    }

    //private
    function notifySubscribers(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifySubscribers();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Reducer is manadatory!');
        _reducer = reducer;
        _currentState = _reducer(_currentState, _init_action);
        const store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function (...args) {
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };

})();