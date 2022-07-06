import { Store } from './crudOps.js';

const updateStatus = (clicked) => {
  const todos = Store.getTodos();
  let todosStatus = [];
  todos.forEach((todo) => {
    if (todo.index === clicked.dataset.done) {
      todo.completed = !todo.completed;
      todosStatus = [...todosStatus, todo];
    }
  });

  Store.updateTodos(todos);
};

export default updateStatus;
