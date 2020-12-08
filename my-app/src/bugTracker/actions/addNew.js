import bugApi from '../services/bugApi';

export async function addNew(bugName) {
  const newBugData = {
    id: 0, /* server will decide the new id */
    name: bugName,
    isClosed: false,
    createdAt: new Date()
  };
  const newBug = await bugApi.save(newBugData);
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}