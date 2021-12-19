import { TodoItem } from 'components/molecules';
import { store } from '../../..';

import './TodoList.scss';

export const TodoList = () => {
  const NAME_SPACE = 'todo-list';
  const { todos } = store;
  const handleClick = (e) => {
    store.removeTodo(e.target.id);
  };
  const handleChange = (e) => {
    const { isComplete } = todos.find((todo) => todo.id === e.target.id);
    store.updateTodo(e.target.id, { isComplete: !isComplete });
  };

  return `
    <ul class="${NAME_SPACE}">
      ${todos.reduce(
        (acc, todo) =>
          acc +
          TodoItem({
            props: {
              id: todo.id,
              title: todo.title,
              isComplete: todo.isComplete,
              onClick: handleClick,
              onChange: handleChange,
            },
          }),
        ''
      )}
    </ul>
    `;
};
