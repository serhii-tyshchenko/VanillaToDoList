import { TodoItem } from 'components/molecules';
import { mockedTodos } from 'mocks';

import './TodoList.scss';

export const TodoList = () => {
  const NAME_SPACE = 'todo-list';
  console.log(mockedTodos);

  return `
    <ul class="${NAME_SPACE}">
      ${mockedTodos.reduce((acc, todo) => acc + TodoItem({ props: todo }), '')}
    </ul>
    `;
};
