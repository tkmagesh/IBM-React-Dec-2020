import { useState } from 'react';

const Projects = ({ projects, addNew }) => {
  const [newProjectName, setNewProjectName] = useState("");
  return (
    <div>
      <h3>Projects</h3>
      <hr/>
      <label>Project Name : </label>
      <input
        type="text"
        onChange={evt => setNewProjectName(evt.target.value)}
      />
      <input
        type="button"
        value="Add New"
        onClick={() => addNew(newProjectName)}
      />
      <div>
        {projects.map(project => (
          <span key={project.id}> [{project.name}] </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;