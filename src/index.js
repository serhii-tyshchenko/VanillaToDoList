import App from './app';
import { Store } from 'store';
import { mockedTodos } from 'mocks';

import 'index.scss';

export const eventHandlers = [];
const OUTPUT = document.getElementById('root');

const handlerPairs = {
  click: 'onClick',
  change: 'onChange',
};
console.log(eventHandlers);
const handleEvent = (e, type) => {
  const targetId = e.target?.dataset?.key;
  if (!targetId) return null;
  const pair = eventHandlers.find(
    (el) => el.id === targetId && el[handlerPairs[type]]
  );
  if (pair) {
    pair[handlerPairs[type]](e);
  }
};

const handleClickEvenet = (e) => handleEvent(e, 'click');
const handleChangeEvenet = (e) => handleEvent(e, 'change');

OUTPUT.addEventListener('click', handleClickEvenet);

OUTPUT.addEventListener('change', handleChangeEvenet);
class AppRoot {
  constructor(output, app) {
    this.output = output;
    this.app = app;
  }
  render() {
    this.output.innerHTML = this.app();
  }
}

const myApp = new AppRoot(OUTPUT, App);

export const store = new Store(myApp, mockedTodos);

myApp.render();
