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

  eventHandlers.push({ id, onChange });

  return `
  <input
    id=${id}
    type=${type}
    value="${value}"
    class="ui-input"
    ${disabled ? 'disabled' : ''}
    onChange="${onChange}"
   >`;
};
