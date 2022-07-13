import { Store } from './crudOps.js';

// make a mock of the todo list local storage
let mockTodoStore = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    mockTodoStore[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => mockTodoStore[key]);
});

beforeEach(() => {
  mockTodoStore = {
    todos: JSON.stringify([]),
  };
});

afterAll(() => {
  // return our mocks to their original values
  global.Storage.prototype.setItem.mockReset();
  global.Storage.prototype.getItem.mockReset();
});

describe('addTodo()', () => {
  it('should add a todo item to local storage', () => {
    const todo = { description: 'test', completed: false, index: 0 };
    Store.addTodo(todo);
    expect(JSON.parse(mockTodoStore.todos)).toEqual([todo]);
  });
});

describe('deleteTodo()', () => {
  it('should remove a todo item from local storage', () => {
    const index = 0;
    const todo = { description: 'test', completed: false, index };
    Store.addTodo(todo);
    Store.deleteTodo(index);
    expect(JSON.parse(mockTodoStore.todos)).toEqual([]);
  });
});