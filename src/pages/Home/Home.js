import { Header, Main, Footer, Container } from 'layout';
import { UIButton, UIInput } from 'components/atoms';

export const Home = () => {
  const handleClick = (evt) => console.log(evt.target?.id);
  const handleChange = (evt) => console.log(evt.target?.value);

  return Container({
    children: `
    ${Header()}
    ${Main({
      children: `
        ${UIButton({
          label: 'adsd',
          id: 'id1',
          onClick: handleClick,
        })}
      ${UIButton({
        id: 'id2',
        onClick: handleClick,
      })}
      ${UIInput({ onChange: handleChange })}`,
    })}
    ${Footer()}
    `,
  });
};
