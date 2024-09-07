import styled from 'styled-components';

const Div = styled.div`
  background: rgb(82, 11, 153);
  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.gradient1} 0%,
    ${({ theme }) => theme.gradient2} 130%
  );
  min-height: 20rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 4rem;
  z-index: -1;
  opacity: 0.85;
`;

const Gradient = () => {
  return <Div />;
};

export default Gradient;
