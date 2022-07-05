import './styles.css';

const todo = [
  {
    description: 'onelsdvsdvsdvsdvs',
    completed: true,
    index: 1,
  },
  {
    description: 'threelsdvsdvsdvsdvs',
    completed: true,
    index: 3,
  },
  {
    description: 'twolsdvsdvsdvsdvs',
    completed: true,
    index: 2,
  },
];

const sortedTodo = todo.sort((prev, next) => prev.index - next.index);
const form = document.getElementById('form');
const container = document.querySelector('.container');

const displayTodo = () => {
  sortedTodo.forEach(({ description }) => {
    const listItem = document.createElement('div');
    listItem.className = 'row list-item';
    listItem.innerHTML = `
    <svg class="icon-check">
      <use
        xlink:href="/web/20180320194056mp_/http://www.getminimalist.com/assets/icons.svg#icon-check"
      ></use>
    </svg>
    <input class="todo-item" type="text" value=${description} />
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
  });
};

container.addEventListener('load', displayTodo());
