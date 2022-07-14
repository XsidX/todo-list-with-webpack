import { Store, editTodos } from './crudOps.js';

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
});
