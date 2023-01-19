import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";

const HeaderNav = styled.header`
  width: 100%;
  border-bottom: solid 1px pink;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0;

  a {
    padding: 1rem;
    display: block;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Nav>
          <Logo />
          <Ul>
            <Li>
              <NavLink to="projects">Projects</NavLink>
            </Li>
            <Li>
              <NavLink to="designs">Designs</NavLink>
            </Li>
            <Li>
              <NavLink to="process">Process</NavLink>
            </Li>
            <Li>
              <NavLink to="about">About</NavLink>
            </Li>
            <Li>
              <NavLink to="contact">Contact</NavLink>
            </Li>
          </Ul>
        </Nav>
      </Container>
    </HeaderNav>
  )
}

export default Header;