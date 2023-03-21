import styled from 'styled-components';

const Div = styled.div`
  max-width: 75ch;
  margin: 0 auto;
`;

const Limiter = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Limiter;
