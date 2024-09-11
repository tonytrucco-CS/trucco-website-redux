import styled from 'styled-components';
import MaterialIcon from './MaterialIcon';
import { transparentize } from 'polished';

const Scroll = styled.button`
  color: ${({ theme }) => theme.link};
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  cursor: pointer;
  padding: 8px 16px 8px 0;
  border-radius: 1rem;
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s, padding 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      transparentize(0.9, theme.buttonBackground)};
    padding-left: 8px;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => transparentize(0.75, theme.link)};
    padding-left: 8px;
  }
`;

const ScrollTop = () => {
  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Scroll onClick={() => scroll()}>
      <MaterialIcon icon={'vertical_align_top'} /> Back to the top
    </Scroll>
  );
};

export default ScrollTop;
