import { Store, displayTodo } from './crudOps.js';

const updateStatus = (clicked) => {
  const todos = Store.getTodos();
  let todosStatus = [];
  todos.forEach((todo) => {
    if (todo.index === clicked.dataset.ind) {
      todo.completed = !todo.completed;
      todosStatus = [...todosStatus, todo];
    }
  });

  Store.updateTodos(todos);
  displayTodo();
};

const clearCompleted = () => {
  const todos = Store.getTodos();
  const newTodos = todos.filter((todo) => todo.completed === false);

  Store.updateTodos(newTodos);
  displayTodo();
};

export { updateStatus, clearCompleted };
