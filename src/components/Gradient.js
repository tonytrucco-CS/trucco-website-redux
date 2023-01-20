import styled from "styled-components";
import { colors } from "../constants/variables";
import Container from "./Container";

const Div = styled.div`
  background: rgb(82,11,153);
  background: linear-gradient(160deg, ${colors.gradient1} 0%, ${colors.gradient2} 100%);
  min-height: 20rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const H1 = styled.h1`
  color: ${colors.white};
  padding-bottom: 10rem;
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