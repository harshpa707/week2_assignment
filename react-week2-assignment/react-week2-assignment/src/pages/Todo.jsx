import { useState } from "react";

export default function Todo() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React"
    }
  ]);

  function addTodo(e) {
    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: task
    };

    setTodos([...todos, newTodo]);

    setTask("");
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(
      (todo) => todo.id !== id
    );

    setTodos(updatedTodos);
  }

  return (
    <div className="card">

      <h1>To-Do App</h1>

      <form onSubmit={addTodo}>

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          Add
        </button>

      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>

            {todo.title}

            <button
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}