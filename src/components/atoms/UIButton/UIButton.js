import { eventHandlers } from 'index.js';
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

  eventHandlers.push({ id, onClick });

  return `
  <button
    id="${id}"
    type=${type}
    class="ui-button"
    ${disabled ? 'disabled' : ''}
  >
    ${label}
  </button>`;
};
