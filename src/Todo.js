/** Todo Component */

import { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };

  const handleChange = (e) => {
    setEditTask(e.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = (e) => {
    e.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  //default todo view
  let jsx = (
    <>
      <td>{task}</td>
      <td>
        <button onClick={toggleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </>
  );

  //todo view when editing
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Update</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
