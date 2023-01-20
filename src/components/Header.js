import { transparentize } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../constants/variables";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const HeaderNav = styled.header`
  width: 100%;
  box-shadow: 0 0.5rem 2rem ${transparentize(0.66, colors.black)};
  z-index: 10;
  position: relative;
  background-color: #FFFFFF;
  height: 4rem;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0;
  `;

const StyledNavLink = styled(NavLink)`
  color: ${colors.button};
  padding: 1rem 1.5rem;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  background-color: transparent;

  &.active {
    background-color: ${transparentize(0.95, colors.black)};
  }

  &:hover {
    background-color: ${transparentize(0.95, colors.black)};
  }
`;

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Nav>
          <Left>
            <Logo />
            <Ul>
              <Li>
                <StyledNavLink to="projects">Projects</StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to="designs">Designs</StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to="process">Process</StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to="about">About</StyledNavLink>
              </Li>
            </Ul>
          </Left>
          <Button to="contact" size='sm'>Contact</Button>
        </Nav>
      </Container>
    </HeaderNav>
  )
}

export default Header;