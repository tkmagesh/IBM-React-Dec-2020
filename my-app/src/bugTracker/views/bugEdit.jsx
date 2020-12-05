import { useState } from 'react';
const BugEdit = ({ addNew }) => {
  const [newBugName, setNewBugName] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
      <label htmlFor="">Project : </label>
      <select>
        <option></option>
        <option></option>
      </select>
      <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
    </section>
  );
};

export default BugEdit;