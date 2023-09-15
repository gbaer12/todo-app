/** Todo List Component */

import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //add a new todo
  const create = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  //update a todo with updatedTask
  const update = (id, updatedTask) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  //delete a todo by id
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo, index) => (
    <tr>
      <th scope="row">{index + 1}</th>
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        update={update}
        remove={remove}
      />
    </tr>
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <div>
        <p>`You have {todos.length} Todos</p>
      </div>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{todoComponents}</tbody>
      </Table>
    </div>
  );
}

export default TodoList;

//{todos.length > 0 ? “Not empty” : “empty”}
