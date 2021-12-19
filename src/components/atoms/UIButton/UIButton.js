import { eventHandlers } from 'index.js';
import { v4 as uuidv4 } from 'uuid';

import './UIButton.scss';

const UIButtonDefaultProps = {
  label: 'UIButton',
  disabled: false,
  type: 'button',
  onClick: () => null,
};

export const UIButton = (props) => {
  const { label, onClick, disabled, type, id } = {
    ...UIButtonDefaultProps,
    ...props,
  };
  const key = uuidv4();

  eventHandlers.push({ id: key, onClick });

  return `
  <button
    data-key="${key}"
    id="${id}"
    type=${type}
    class="ui-button"
    ${disabled ? 'disabled' : ''}
  >
    ${label}
  </button>`;
};
