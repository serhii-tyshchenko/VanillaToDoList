import { v4 as uuidv4 } from 'uuid';
import { eventHandlers } from 'index.js';

import './UIInput.scss';

const UIInputDefaultProps = {
  id: 'ui-input',
  disabled: false,
  type: 'text',
  value: '',
  onChange: () => null,
};

export const UIInput = (props = UIInputDefaultProps) => {
  const { onChange, disabled, type, value, id } = {
    ...UIInputDefaultProps,
    ...props,
  };
  const key = uuidv4();

  eventHandlers.push({ id: key, onChange });

  return `
  <input
    id=${id}
    data-key="${key}"
    type=${type}
    value="${value}"
    class="ui-input"
    ${disabled ? 'disabled' : ''}
   >`;
};
