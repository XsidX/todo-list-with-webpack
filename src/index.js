/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import {
  Store,
  displayTodo,
  createTodo,
  deleteTodo,
  updateTodos,
} from './crudOps.js';
import './styles.css';

const form = document.getElementById('form');
const inputTodo = document.getElementById('new-todo');
const submitTodo = document.getElementById('submit');

const todo = Store.getTodos();
const sortedTodo = [...todo].sort((prev, next) => prev.index - next.index);

inputTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    // trigger form submit
    submitTodo.click();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo();
});

document.addEventListener('DOMContentLoaded', () => {
  sortedTodo.forEach((todo) => {
    displayTodo(todo);
  });

  // Event: delete todo
  form.addEventListener('click', (e) => {
    const clicked = e.target.closest('.delete');
    if (!clicked) return;

    // // Remove from ui
    deleteTodo(clicked);
    // Remove from local storage
    Store.deleteTodo(clicked.dataset.del);
  });

  form.addEventListener('click', (e) => {
    const clicked = e.target.closest('.todo-item');
    if (!clicked) return;

    updateTodos(clicked);
  });
});
