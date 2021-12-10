import './Main.scss';

const MainDefaultProps = {
  children: '',
};

export const Main = (props = MainDefaultProps) =>
  `<main class="main">${props.children}</main>`;
