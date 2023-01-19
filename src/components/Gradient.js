import styled from "styled-components";
import Container from "./Container";

const Div = styled.div`
  background: rgb(82,11,153);
  background: linear-gradient(160deg, rgba(82,11,153,1) 0%, rgba(240,84,7,1) 100%);
  min-height: 10rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const H1 = styled.h1`
  color: white;
  padding-bottom: 3rem;
  text-transform: uppercase;
  font-weight: 300;
`;

const Gradient = ({title}) => {
  return (
    <Div>
      <Container>
        <H1>{title}</H1>
      </Container>
    </Div>
  )
}

export default Gradient;