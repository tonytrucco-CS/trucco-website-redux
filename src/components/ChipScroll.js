import styled from 'styled-components';
import { breakpoints } from '../constants/variables';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${breakpoints.xs}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 0.5em;
  }
`;

const ChipScroll = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export default ChipScroll;
