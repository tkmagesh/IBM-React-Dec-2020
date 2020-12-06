import bugApi from '../services/bugApi';

export async function remove(bugToRemove) {
  await bugApi.remove(bugToRemove);
  const action = { type: "BUG_REMOVE", payload: bugToRemove };
  return action;
}