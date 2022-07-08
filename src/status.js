import { Store, displayTodo } from './crudOps.js';

const updateStatus = (ind) => {
  const todos = Store.getTodos();
  const todo = todos.find((todo) => todo.index === ind);
  todo.completed = !todo.completed;

  Store.updateTodos(todos);
  displayTodo();
};

const clearCompleted = () => {
  const todos = Store.getTodos();
  const newTodos = todos.filter((todo) => todo.completed === false);

  Store.updateTodos(Store.updateIndex(newTodos));
  displayTodo();
};

export { updateStatus, clearCompleted };
