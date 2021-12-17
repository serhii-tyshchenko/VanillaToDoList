import { eventHandlers } from 'index.js';
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

  eventHandlers.push({ id, onChange });
  const isChecked = checked ? 'checked' : '';

  return `<input id="${id}" type="checkbox" class="ui-checkbox" ${isChecked}>`;
};
