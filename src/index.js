/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import {
  Store, displayTodo, createTodo, editTodos,
} from './crudOps.js';
import { updateStatus, clearCompleted } from './status';
import './styles.css';

const form = document.getElementById('form');
const listContainer = document.querySelector('.list-container');
const clear = document.querySelector('.clear');

// Add Event Listeners

// Event: Display todo list
window.addEventListener('load', displayTodo);

// Event: Add todo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo();
});

// Event: delete todo
listContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.delete');
  if (!clicked) return;

  Store.deleteTodo(+clicked.dataset.del);
  displayTodo();
});

// Event: update todo
listContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.todo-item');
  if (!clicked) return;

  clicked.addEventListener('keyup', () => {
    const todoIndex = +clicked.dataset.todo;
    const description = clicked.value.trim();

    editTodos(todoIndex, description);
  });
});

// Event: update status
listContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.check-box');
  if (!clicked) return;

  updateStatus(+clicked.dataset.ind);
});

// Event: clear completed
clear.addEventListener('click', clearCompleted);
