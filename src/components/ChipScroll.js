import styled from 'styled-components';
import { breakpoints } from '../constants/variables';

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media only screen and (max-width: ${breakpoints.xs}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 8px;
  }
`;

const ChipScroll = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export default ChipScroll;
