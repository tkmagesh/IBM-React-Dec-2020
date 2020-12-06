import bugApi from '../services/bugApi';

export async function toggle(bugToToggle) {
  const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const toggledBug = await bugApi.save(toggledBugData);
  const action = { type: "BUG_REPLACE", payload: toggledBug };
  return action;
}