import { Store, editTodos } from './crudOps.js';
import { updateStatus, clearCompleted } from './status.js';

describe('editTodos()', () => {
  beforeEach(() => {
    localStorage.setItem('todos', JSON.stringify([]));
  });

  it('should edit the todo description in localStorage', () => {
    const index = 0;
    const todo = { description: 'test', completed: false, index };
    Store.addTodo(todo);
    const newDescription = 'new description';

    editTodos(index, newDescription);

    expect(JSON.parse(localStorage.getItem('todos'))[0].description).toEqual(newDescription);
  });
});

describe('local storage status', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <div class='list-container'></div>
  `;
  });

  beforeEach(() => {
    localStorage.setItem('todos', JSON.stringify([]));
  });

  it('should update the completed status of a todo', () => {
    const index = 0;
    const todo = { description: 'test', completed: false, index };
    Store.addTodo(todo);
    updateStatus(index);
    expect(JSON.parse(localStorage.getItem('todos'))[0].completed).toEqual(true);
  });

  it('should clear all completed todos', () => {
    const todo = { description: 'test', completed: false, index: 0 };
    const todo2 = { description: 'test2', completed: true, index: 1 };
    Store.addTodo(todo);
    Store.addTodo(todo2);
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual([todo]);
  });
});
