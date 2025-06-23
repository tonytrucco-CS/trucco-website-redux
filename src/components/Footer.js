import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../constants/variables';
import Chip from './Chip';
import Container from './Container';
import Logo from './Logo';
import { transparentize } from 'polished';
import FontSizeAdjust from './FontSizeAdjust';

const StyledFooter = styled.footer`
  width: 100%;
  z-index: 10;
  position: relative;
  background-color: ${({ theme }) => theme.contentBG};
  display: flex;
  align-items: center;
  padding: 48px 0;

  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 48px 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 128px 1fr 1fr;
  grid-gap: 48px;

  @media only screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media only screen and (max-width: ${breakpoints.md}) {
    max-width: 160px;
    margin: 0 auto;
  }
`;

const Small = styled.small`
  color: ${colors.gray500};
  white-space: nowrap;
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: ${(props) => (props.direction === 'end' ? 'flex-end' : null)};

  @media only screen and (max-width: ${breakpoints.sm}) {
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-family: ${fonts.sansserif};
  font-size: 1.75rem;
  color: ${({ theme }) => transparentize(0.33, theme.text)};
`;

const H2 = styled.h2`
  font-family: ${fonts.sansserif};
  font-size: 1.25rem;
  color: ${({ theme }) => transparentize(0.33, theme.text)};
  margin: 16px 0 0;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};

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
  gap: 16px;

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
      <FontSizeAdjust />
      <Container>
        <Grid>
          <Copy>
            <Logo small={false} />
            <Small>&copy; {currentYear} Tony Trucco</Small>
          </Copy>
          <LinkSection aria-label="Website links for tonytrucco.com">
            <H1>tonytrucco.com</H1>
            <Flex>
              <Chip to="projects" label="Case Studies" />
              <Chip to="process" label="Process" />
              <Chip to="designs" label="Other Projects" />
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
                href="https://www.instagram.com/orion_in_winter/"
                target="_blank"
                rel="noopener noreferer"
              >
                Instagram
              </A>
            </Flex>
          </LinkSection>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
