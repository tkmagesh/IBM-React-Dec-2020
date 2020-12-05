let currentProjectId = 0;

export const addNew = (projectName) => {
    const action = {
        type: "PROJECT_ADD_NEW",
        payload: {
        id: ++currentProjectId,
        name: projectName,
        createdAt: new Date()
        }
    };
    return action;
}

