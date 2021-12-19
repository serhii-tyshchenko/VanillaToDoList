import { UIButton, UIInput } from 'components/atoms';
import { store } from '../../..';
import { v4 as uuidv4 } from 'uuid';

import './AddTodoForm.scss';

export const AddTodoForm = () => {
  const state = { title: '' };
  const handleClick = () => {
    if (!state.title) {
      alert('Title cannot be empty!');
      return;
    }
    store.addTodo({
      id: uuidv4(),
      title: state.title,
      isComplete: false,
    });
  };
  const handleChange = (evt) => (state.title = evt.target.value);

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
