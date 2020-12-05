export function removeClosed(bugs) {
  const bugsToRemove = bugs.filter(bug => bug.isClosed);
  const action = { type: "BUG_REMOVE_MANY", payload: bugsToRemove };
  return action;
}