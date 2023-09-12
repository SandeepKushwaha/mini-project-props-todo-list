import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state using props
    this.state = {
      id: props.todo.id,
      text: props.todo.text,
      completed: props.todo.completed
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <label>{this.state.text}</label>
      </div>
    );
  }
}

export default TodoItem;
