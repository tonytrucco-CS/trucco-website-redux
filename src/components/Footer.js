import { transparentize } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, defaults, fonts } from "../constants/variables";
import Container from "./Container";
import Logo from "./Logo";

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
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Small = styled.small`
  color: ${colors.midGray};
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: ${props => props.direction === 'end' ? 'flex-end' : null};
`;

const H1 = styled.h1`
  font-family: ${fonts.header};
  font-size: 1.75rem;
  color: ${colors.midGray};
`;

const H2 = styled.h2`
  font-family: ${fonts.header};
  font-size: 1.25rem;
  color: ${colors.midGray};
  margin: 1rem 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.button};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: fit-content;
  border: solid 1px transparent;
  transition: box-shadow 0.3s, background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${transparentize(0.9, colors.black)};
  }

  &:focus {
    outline: none;
    border: solid 1px ${defaults.border};
    box-shadow: 0 0 0 3px ${transparentize(0.95, colors.black)};
  }
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
              <StyledLink to="projects">Projects</StyledLink>
              <StyledLink to="designs">Designs</StyledLink>
              <StyledLink to="process">Process</StyledLink>
              <StyledLink to="about">About</StyledLink>
              <StyledLink to="contact">Contact</StyledLink>
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
              <A href="https://www.linkedin.com/in/tonytrucco/" target="_blank" rel="noopener noreferer">LinkedIn</A>
              <A href="https://github.com/tonytrucco-CS" target="_blank" rel="noopener noreferer">Github</A>
              <A href="https://steamcommunity.com/id/ironnmetal/" target="_blank" rel="noopener noreferer">Steam</A>
              <A href="https://www.instagram.com/orion_in_winter/" target="_blank" rel="noopener noreferer">Instagram</A>
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
  )
}

export default Footer;