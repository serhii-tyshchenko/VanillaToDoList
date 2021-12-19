import { Header, Main, Footer, Container } from 'layout';
import { AddTodoForm } from 'components/molecules';
import { TodoList } from 'components/organisms';
import { v4 as uuidv4 } from 'uuid';
import { eventHandlers } from 'index.js';

export const Home = () =>
  Container({
    children: `
    ${Header()}
    ${Main({
      children: `${AddTodoForm()}${TodoList()}`,
    })}
    ${Footer()}
    `,
  });
