/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import {
  Store, displayTodo, createTodo, updateTodos,
} from './crudOps.js';
import './styles.css';

const form = document.getElementById('form');
const listContainer = document.querySelector('.list-container');

window.addEventListener('load', displayTodo);

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

listContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.todo-item');
  if (!clicked) return;

  updateTodos(clicked);
});
