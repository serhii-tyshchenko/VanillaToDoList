import { UICheckbox, UIButton } from 'components/atoms';

import './TodoItem.scss';

const TodoItemDefaultProps = {
  id: 'testId',
  isComplete: false,
  title: 'todo item',
  onClick: () => {},
  onChange: () => {},
};

export const TodoItem = ({ props }) => {
  const { id, title, isComplete, onClick, onChange } = {
    ...TodoItemDefaultProps,
    ...props,
  };
  const NAME_SPACE = 'todo-item';

  return `
    <li class="${NAME_SPACE}">
      ${UICheckbox({ id, checked: isComplete, onChange })}
      <span class="${NAME_SPACE}__title">${title}</span>
      ${UIButton({ id, onClick, label: 'Delete' })}
    </li>
    `;
};
