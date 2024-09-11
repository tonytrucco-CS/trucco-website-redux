import styled from 'styled-components';
import { breakpoints } from '../constants/variables';

const Div = styled.div`
  width: 100%;
  max-width: ${breakpoints.lg};
  margin: 0 auto;
  padding: 0 16px;

  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 0;
  }
`;

const Container = ({ children, ...props }) => {
  return <Div {...props}>{children}</Div>;
};

export default Container;
