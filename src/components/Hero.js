import styled from 'styled-components';
import { breakpoints } from '../constants/variables';
import Limiter from '../containers/Limiter';

const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  padding-top: 1em;
  padding-bottom: 0.25em;
  text-transform: uppercase;
  font-weight: 500;

  @media only screen and (max-width: ${breakpoints.sm}) {
    padding-top: 0.75em;
  }
`;

const Hero = ({ title, limited = false }) => {
  if (limited) {
    return (
      <Limiter>
        <H1>{title}</H1>
      </Limiter>
    );
  } else {
    return <H1>{title}</H1>;
  }
};

export default Hero;
