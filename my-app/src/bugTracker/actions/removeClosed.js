import bugApi from '../services/bugApi';
export function removeClosed() {
  return function(dispatch, getState){
    const bugs = getState().bugState;
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    bugsToRemove.forEach(async bugToRemove => {
      await bugApi.remove(bugToRemove);
      const action = { type: "BUG_REMOVE", payload: bugToRemove };
      dispatch(action);
    });
  }
}