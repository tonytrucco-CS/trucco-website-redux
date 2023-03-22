import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../constants/variables';
import Chip from './Chip';
import Container from './Container';
import Logo from './Logo';

const StyledFooter = styled.footer`
  width: 100%;
  z-index: 10;
  position: relative;
  background-color: ${colors.pureWhite};
  display: flex;
  align-items: center;
  padding: 3rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 1fr;
  grid-gap: 3rem;

  @media only screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: ${breakpoints.md}) {
    max-width: 10em;
    margin: 0 auto;
  }
`;

const Small = styled.small`
  color: ${colors.midGray};
  white-space: nowrap;
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: ${(props) => (props.direction === 'end' ? 'flex-end' : null)};

  @media only screen and (max-width: ${breakpoints.sm}) {
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-family: ${fonts.serif};
  font-size: 1.75rem;
  color: ${colors.midGray};
`;

const H2 = styled.h2`
  font-family: ${fonts.serif};
  font-size: 1.25rem;
  color: ${colors.midGray};
  margin: 1rem 0 0;
`;

const A = styled.a`
  text-decoration: none;
  color: ${colors.button};

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    text-align: right;
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    text-align: center;
    align-items: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <Copy>
            <Logo small={false} />
            <Small>&copy; {currentYear} Tony Trucco</Small>
          </Copy>
          <LinkSection aria-label="Website links for tonytrucco.com">
            <H1>tonytrucco.com</H1>
            <Flex>
              <Chip to="projects" label="Projects" />
              <Chip to="designs" label="Designs" />
              <Chip to="process" label="Process" />
              <Chip to="about" label="About" />
              <Chip to="contact" label="Contact" />
            </Flex>
          </LinkSection>
          <LinkSection aria-labelledby="connect" direction="end">
            <H1 id="connect">Connect with me</H1>
            <Flex>
              <A href="mailto:tonytrucco@gmail.com">tonytrucco@gmail.com</A>
              <A href="tel:614-282-8186">(614) 282-8186</A>
            </Flex>
            <H2>My profiles</H2>
            <Flex>
              <A
                href="https://www.linkedin.com/in/tonytrucco/"
                target="_blank"
                rel="noopener noreferer"
              >
                LinkedIn
              </A>
              <A
                href="https://github.com/tonytrucco-CS"
                target="_blank"
                rel="noopener noreferer"
              >
                Github
              </A>
              <A
                href="https://steamcommunity.com/id/ironnmetal/"
                target="_blank"
                rel="noopener noreferer"
              >
                Steam
              </A>
              <A
                href="https://www.instagram.com/orion_in_winter/"
                target="_blank"
                rel="noopener noreferer"
              >
                Instagram
              </A>
            </Flex>
            <small>
              <A
                href="https://www.freepik.com/free-photo/white-paper-background_932597.htm#query=seamless%20paper%20texture&position=0&from_view=keyword"
                target="_blank"
                rel="noopener noreferer"
              >
                Paper background image by kues
              </A>
            </small>
          </LinkSection>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
