import { Header, Main, Footer, Container } from 'layout';
import { AddTodoForm } from 'components/molecules';
import { TodoList } from 'components/organisms';

export const Home = () => {
  return Container({
    children: `
    ${Header()}
    ${Main({
      children: `${AddTodoForm()}${TodoList()}`,
    })}
    ${Footer()}
    `,
  });
};
