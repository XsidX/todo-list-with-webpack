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
/* harmony export */   "updateTodos": () => (/* binding */ updateTodos)
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

  // update todos

  static updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

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

const listContainer = document.querySelector('.list-container');
const displayTodo = () => {
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
    <input class="todo-item" type="text" data-todo="${index}" data-completed="${completed}" value=${description} />
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

const updateTodos = (el) => {
  el.addEventListener('keyup', () => {
    const todos = Store.getTodos();
    const todoNum = el.dataset.todo;
    const todo = todos.find((todo) => todo.index === todoNum);
    todo.description = el.value.trim();

    Store.updateTodos(todos);
  });
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crudOps.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRCxpREFBaUQsVUFBVTtBQUMzRCxxREFBcUQsVUFBVTtBQUMvRDtBQUNBLHNEQUFzRCxNQUFNLG9CQUFvQixVQUFVLFVBQVUsYUFBYTtBQUNqSCx1Q0FBdUMsTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBSUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NydWRPcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RvcmUge1xuICAvLyBnZXQgdG9kbyBpdGVtcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIGdldFRvZG9zID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG5cbiAgLy8gYWRkIHRvZG8gaXRlbSB0byBsb2NhbCBzdG9yYWdlXG4gIHN0YXRpYyBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0VG9kb3MoKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfTtcblxuICAvLyB1cGRhdGUgdG9kb3NcblxuICBzdGF0aWMgdXBkYXRlVG9kb3MgPSAodG9kb3MpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9O1xuXG4gIHN0YXRpYyB1cGRhdGVJbmRleCA9ICh0b2RvcykgPT4ge1xuICAgIGxldCBpbmRleGVkVG9kbyA9IFtdO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuICAgICAgdG9kby5pbmRleCA9IHRvZG9JbmRleDtcbiAgICAgIGluZGV4ZWRUb2RvID0gWy4uLmluZGV4ZWRUb2RvLCB0b2RvXTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXhlZFRvZG87XG4gIH07XG5cbiAgLy8gcmVtb3ZlIHRvZG8gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIGRlbGV0ZVRvZG8gPSAoaW5kKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaW5kZXggIT09IGluZCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVwZGF0ZUluZGV4KG5ld1RvZG9zKSkpO1xuICB9O1xufVxuXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBkaXNwbGF5VG9kbyA9ICgpID0+IHtcbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUb2RvcygpO1xuICB0b2Rvcy5mb3JFYWNoKCh7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4IH0pID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IGByb3cgbGlzdC1pdGVtIGxpc3QtaXRlbS0ke2luZGV4fWA7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1ib3hcIiBkYXRhLWluZD1cIiR7aW5kZXh9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImljb24tY2hlY2tcIiBkYXRhLWNvbXBsZXRlZD1cIiR7Y29tcGxldGVkfVwiPjwvc3Bhbj5cbiAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2tcIiBkYXRhLWNvbXBsZXRlZD1cIiR7Y29tcGxldGVkfVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8aW5wdXQgY2xhc3M9XCJ0b2RvLWl0ZW1cIiB0eXBlPVwidGV4dFwiIGRhdGEtdG9kbz1cIiR7aW5kZXh9XCIgZGF0YS1jb21wbGV0ZWQ9XCIke2NvbXBsZXRlZH1cIiB2YWx1ZT0ke2Rlc2NyaXB0aW9ufSAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIiBkYXRhLWRlbD1cIiR7aW5kZXh9XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIiA+PC9pPjwvYnV0dG9uPlxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjVweFwiXG4gICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgIGNsYXNzPVwiaWNvbi1tb3ZlXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcIlxuICAgICAgICBmaWxsPVwiI2I2YjZiOFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICBgO1xuXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgLy8gZ2V0IHRvZG8gZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKS52YWx1ZTtcblxuICBpZiAoIWRlc2NyaXB0aW9uKSByZXR1cm47XG5cbiAgLy8gY3JlYXRlIG5ldyB0b2RvIG9iamVjdFxuICBjb25zdCB0b2RvID0ge1xuICAgIGRlc2NyaXB0aW9uOiBgJHtkZXNjcmlwdGlvbn1gLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IFN0b3JlLmdldFRvZG9zKCkubGVuZ3RoLFxuICB9O1xuXG4gIC8vIGFkZCBuZXcgdG9kbyB0byBsb2NhbCBzdG9yYWdlXG4gIFN0b3JlLmFkZFRvZG8odG9kbyk7XG5cbiAgLy8gYWRkIG5ldyB0b2RvIHRvIFVJXG4gIGRpc3BsYXlUb2RvKCk7XG59O1xuXG5jb25zdCB1cGRhdGVUb2RvcyA9IChlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRvZG9zKCk7XG4gICAgY29uc3QgdG9kb051bSA9IGVsLmRhdGFzZXQudG9kbztcbiAgICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gdG9kb051bSk7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGVsLnZhbHVlLnRyaW0oKTtcblxuICAgIFN0b3JlLnVwZGF0ZVRvZG9zKHRvZG9zKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBTdG9yZSwgZGlzcGxheVRvZG8sIGNyZWF0ZVRvZG8sIHVwZGF0ZVRvZG9zLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==