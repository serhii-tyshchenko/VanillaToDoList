import 'index.scss';
import App from './app';

export const eventHandlers = [];

const OUTPUT = document.getElementById('root');

OUTPUT.addEventListener('click', (e) => {
  if (!e.target?.id) return null;

  const targetId = e.target.id;
  const pair = eventHandlers.find((el) => el.id === targetId);
  if (pair) {
    pair.onClick && pair.onClick(e);
  }
});

OUTPUT.addEventListener('change', (e) => {
  if (!e.target?.id) return null;

  const targetId = e.target.id;
  const pair = eventHandlers.find((el) => el.id === targetId);
  if (pair) {
    pair.onChange && pair.onChange(e);
  }
});

OUTPUT.innerHTML = App();
