import React, { Fragment, useState } from "react";
import "../App.css";

const Todo = ({ todo, index, removeTodo, completeTodo }) => {
  const { text } = todo;
  const handleRemoveTodo = () => {
    removeTodo(index);
  };
  const handleCompleteTodo = () => {
    completeTodo(index);
  };

  return (
    <Fragment>
      <div
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        className="todo"
      >
        {text}
      </div>
      <button onClick={handleRemoveTodo}>Remove Todo</button>
      <button onClick={handleCompleteTodo}>Complete Todo</button>
    </Fragment>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const Todolist = () => {
  const [todos, setTodo] = useState([
    {
      text: "Learn about react",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },

    {
      text: "Build todo app",
      isCompleted: false
    }
  ]);

  const addTodo = value => {
    setTodo([
      ...todos,
      {
        text: value,
        isCompleted: false
      }
    ]);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    console.log("New todos", todos);
    setTodo(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Todolist;
