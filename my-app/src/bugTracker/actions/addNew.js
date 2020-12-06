let currentBugId = 0;

export function addNew(bugName) {
  const newBug = {
    id: 0, /* server will decide the new id */
    name: bugName,
    isClosed: false,
    createdAt: new Date()
  };
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}