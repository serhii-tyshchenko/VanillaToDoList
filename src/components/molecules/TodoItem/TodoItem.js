import { UICheckbox } from 'components/atoms';

import './TodoItem.scss';

const TodoItemDefaultProps = {
  id: 'testId',
  isComplete: false,
  title: 'todo item',
};

export const TodoItem = ({ props }) => {
  const { id, title, isComplete } = {
    ...TodoItemDefaultProps,
    ...props,
  };
  const NAME_SPACE = 'todo-item';

  return `
    <li class="${NAME_SPACE}">
      <span class="${NAME_SPACE}__title">${title}</span>
      ${UICheckbox({ id, checked: isComplete })}
    </li>
    `;
};
