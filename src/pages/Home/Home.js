import { Header, Main, Footer, Container } from 'layout';

export const Home = () => {
  const children = `${Header()}${Main()}${Footer()}`;
  return Container({ children });
};
