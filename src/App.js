import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import todos from "./todoData.js";

class App extends React.Component {
  render() {
    // Map over the todos data and render TodoItem components with the data as props
    const todoItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {todoItems}
      </div>
    );
  }
}

export default App;
