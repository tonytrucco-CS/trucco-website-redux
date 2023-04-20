import styled from 'styled-components';
import { colors } from '../constants/variables';

const Scroll = styled.button`
  color: ${colors.blue};
  border: none;
  background: none;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ScrollTop = () => {
  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return <Scroll onClick={() => scroll()}>⬑ Back to the top</Scroll>;
};

export default ScrollTop;
