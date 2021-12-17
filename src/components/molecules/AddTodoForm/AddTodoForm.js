import { UIButton, UIInput } from 'components/atoms';

import './AddTodoForm.scss';

export const AddTodoForm = () => {
  const handleClick = (evt) => console.log(evt.target?.id);
  const handleChange = (evt) => console.log(evt.target?.value);
  return `
    <div class="add-todo-form">
    ${UIInput({ onChange: handleChange })}
    ${UIButton({
      label: 'Add Todo',
      id: 'add-todo-btn',
      onClick: handleClick,
    })}
    </div>
    `;
};
