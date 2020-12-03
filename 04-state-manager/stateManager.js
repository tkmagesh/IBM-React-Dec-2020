var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = null,

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
        _reducer = reducer;
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };

})();