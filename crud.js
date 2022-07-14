"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["crud"],{

/***/ "./src/crudOps.js":
/*!************************!*\
  !*** ./src/crudOps.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "editTodos": () => (/* binding */ editTodos)
/* harmony export */ });
class Store {
  // get todo items from local storage
  static getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

  // add todo item to local storage
  static addTodo = (todo) => {
    const todos = this.getTodos();
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // update todos in local storage
  static updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // update todo index in local storage
  static updateIndex = (todos) => {
    let indexedTodo = [];
    todos.forEach((todo, todoIndex) => {
      todo.index = todoIndex;
      indexedTodo = [...indexedTodo, todo];
    });
    return indexedTodo;
  };

  // remove todo item from local storage
  static deleteTodo = (ind) => {
    const todos = this.getTodos();
    const newTodos = todos.filter((todo) => todo.index !== ind);

    localStorage.setItem('todos', JSON.stringify(this.updateIndex(newTodos)));
  };
}

const displayTodo = () => {
  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  const todos = Store.getTodos();
  todos.forEach(({ description, completed, index }) => {
    const listItem = document.createElement('div');
    listItem.className = `row list-item list-item-${index}`;
    listItem.innerHTML = `
    <button class="check-box" data-ind="${index}">
      <span class="icon-check" data-completed="${completed}"></span>
      <i class="fa-solid fa-check" data-completed="${completed}"></i>
    </button>
    <input class="todo-item" type="text" data-todo="${index}" data-completed="${completed}" value='${description}' />
    <button class="delete" data-del="${index}"><i class="fa-solid fa-trash-can" ></i></button>
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

    listContainer.appendChild(listItem);
  });
};

const createTodo = () => {
  // get todo description
  const description = document.querySelector('#new-todo').value;
  if (!description) return;

  // create new todo object
  const todo = {
    description: `${description}`,
    completed: false,
    index: Store.getTodos().length,
  };

  // add new todo to local storage
  Store.addTodo(todo);

  // add new todo to UI
  displayTodo();
};

const editTodos = (todoIndex, description) => {
  const todos = Store.getTodos();
  const todo = todos.find((todo) => todo.index === todoIndex);
  todo.description = description;

  Store.updateTodos(todos);
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crudOps.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQsaURBQWlELFVBQVU7QUFDM0QscURBQXFELFVBQVU7QUFDL0Q7QUFDQSxzREFBc0QsTUFBTSxvQkFBb0IsVUFBVSxXQUFXLFlBQVk7QUFDakgsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3J1ZE9wcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RvcmUge1xuICAvLyBnZXQgdG9kbyBpdGVtcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIGdldFRvZG9zID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG5cbiAgLy8gYWRkIHRvZG8gaXRlbSB0byBsb2NhbCBzdG9yYWdlXG4gIHN0YXRpYyBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0VG9kb3MoKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfTtcblxuICAvLyB1cGRhdGUgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZVxuICBzdGF0aWMgdXBkYXRlVG9kb3MgPSAodG9kb3MpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9O1xuXG4gIC8vIHVwZGF0ZSB0b2RvIGluZGV4IGluIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIHVwZGF0ZUluZGV4ID0gKHRvZG9zKSA9PiB7XG4gICAgbGV0IGluZGV4ZWRUb2RvID0gW107XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgdG9kb0luZGV4KSA9PiB7XG4gICAgICB0b2RvLmluZGV4ID0gdG9kb0luZGV4O1xuICAgICAgaW5kZXhlZFRvZG8gPSBbLi4uaW5kZXhlZFRvZG8sIHRvZG9dO1xuICAgIH0pO1xuICAgIHJldHVybiBpbmRleGVkVG9kbztcbiAgfTtcblxuICAvLyByZW1vdmUgdG9kbyBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZVxuICBzdGF0aWMgZGVsZXRlVG9kbyA9IChpbmQpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0VG9kb3MoKTtcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pbmRleCAhPT0gaW5kKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudXBkYXRlSW5kZXgobmV3VG9kb3MpKSk7XG4gIH07XG59XG5cbmNvbnN0IGRpc3BsYXlUb2RvID0gKCkgPT4ge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHRvZG9zID0gU3RvcmUuZ2V0VG9kb3MoKTtcbiAgdG9kb3MuZm9yRWFjaCgoeyBkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCB9KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBgcm93IGxpc3QtaXRlbSBsaXN0LWl0ZW0tJHtpbmRleH1gO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stYm94XCIgZGF0YS1pbmQ9XCIke2luZGV4fVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNoZWNrXCIgZGF0YS1jb21wbGV0ZWQ9XCIke2NvbXBsZXRlZH1cIj48L3NwYW4+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrXCIgZGF0YS1jb21wbGV0ZWQ9XCIke2NvbXBsZXRlZH1cIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGlucHV0IGNsYXNzPVwidG9kby1pdGVtXCIgdHlwZT1cInRleHRcIiBkYXRhLXRvZG89XCIke2luZGV4fVwiIGRhdGEtY29tcGxldGVkPVwiJHtjb21wbGV0ZWR9XCIgdmFsdWU9JyR7ZGVzY3JpcHRpb259JyAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIiBkYXRhLWRlbD1cIiR7aW5kZXh9XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIiA+PC9pPjwvYnV0dG9uPlxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgIGNsYXNzPVwiaWNvbi1tb3ZlXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcIlxuICAgICAgICBmaWxsPVwiI2I2YjZiOFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICBgO1xuXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgLy8gZ2V0IHRvZG8gZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKS52YWx1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgcmV0dXJuO1xuXG4gIC8vIGNyZWF0ZSBuZXcgdG9kbyBvYmplY3RcbiAgY29uc3QgdG9kbyA9IHtcbiAgICBkZXNjcmlwdGlvbjogYCR7ZGVzY3JpcHRpb259YCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiBTdG9yZS5nZXRUb2RvcygpLmxlbmd0aCxcbiAgfTtcblxuICAvLyBhZGQgbmV3IHRvZG8gdG8gbG9jYWwgc3RvcmFnZVxuICBTdG9yZS5hZGRUb2RvKHRvZG8pO1xuXG4gIC8vIGFkZCBuZXcgdG9kbyB0byBVSVxuICBkaXNwbGF5VG9kbygpO1xufTtcblxuY29uc3QgZWRpdFRvZG9zID0gKHRvZG9JbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUb2RvcygpO1xuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gdG9kb0luZGV4KTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gIFN0b3JlLnVwZGF0ZVRvZG9zKHRvZG9zKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlUb2RvLCBjcmVhdGVUb2RvLCBlZGl0VG9kb3MgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==