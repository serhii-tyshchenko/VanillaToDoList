import { eventHandlers } from 'index.js';
import { v4 as uuidv4 } from 'uuid';
import './UICheckbox.scss';

const UICheckboxDefaultProps = {
  checked: false,
  onChange: () => null,
};

export const UICheckbox = (props) => {
  const { onChange, checked, id } = {
    ...UICheckboxDefaultProps,
    ...props,
  };
  const key = uuidv4();

  eventHandlers.push({ id: key, onChange });
  const isChecked = checked ? 'checked' : '';

  return `<input id="${id}" data-key="${key}" type="checkbox" class="ui-checkbox" ${isChecked}>`;
};
