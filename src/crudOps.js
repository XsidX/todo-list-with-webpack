class Store {
  // get todo items from local storage
  static getTodos = () => {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
  };

  // add todo item to local storage
  static addTodo = (todo) => {
    const todos = this.getTodos();
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // update todos

  static updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // remove todo item from local storage
  static deleteTodo = (ind) => {
    const todos = this.getTodos();

    const newTodos = todos.filter((todo) => todo.index !== ind);

    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
}

const form = document.getElementById('form');

const displayTodo = ({ description, index }) => {
  const listItem = document.createElement('div');
  listItem.className = 'row list-item';
  listItem.innerHTML = `
    <span class="icon-check"></span>
    <input class="todo-item" type="text" data-todo="${index}" value=${description} />
    <i class="fa-solid fa-trash-can delete" data-del="${index}"></i>
    <svg
      width="25px"
      height="30px"
      class="icon-move"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#b6b6b8"
      ></path>
    </svg>
  `;

  form.appendChild(listItem);
};

const createTodo = () => {
  // get todo description
  const description = document.querySelector('#new-todo').value;

  if (!description) return;

  // create new todo object
  const todo = {
    description: `${description}`,
    completed: false,
    index: `${Store.getTodos().length + 1}`,
  };

  // add new todo to UI
  displayTodo(todo);

  // add new todo to local storage
  Store.addTodo(todo);
};

const deleteTodo = (el) => {
  el.parentElement.remove();
};

const updateTodos = (el) => {
  el.addEventListener('keyup', () => {
    const todos = Store.getTodos();
    const todoNum = el.dataset.todo;
    const todo = todos.find((todo) => todo.index === todoNum);
    todo.description = el.value.trim();

    Store.updateTodos(todos);
  });
};
// localStorage.clear();

export { Store, displayTodo, createTodo, deleteTodo, updateTodos };
