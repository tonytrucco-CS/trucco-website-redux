import styled from "styled-components";
import { colors } from "../constants/variables";
import Limiter from "../containers/Limiter";

const H1 = styled.h1`
  color: ${colors.white};
  padding-top: 5rem;
  text-transform: uppercase;
  font-weight: 300;
`;

const Hero = ({title, limited = false}) => {
  if (limited) {
    return (
      <Limiter>
        <H1>{title}</H1>
      </Limiter>
    )
  } else {
    return (
      <H1>{title}</H1>
    )
  }
}

export default Hero;