import styled from 'styled-components';

const Div = styled.div`
  max-width: 770px;
  margin: 0 auto;
`;

const Limiter = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Limiter;
