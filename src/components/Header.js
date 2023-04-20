import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../constants/variables';
import useWindowDimensions from '../utils/helpers';
import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import MobileNav from './MobileNav';

const HeaderNav = styled.header`
  width: 100%;
  box-shadow: 0 0.5rem 2rem ${transparentize(0.66, colors.black)};
  z-index: 10;
  position: relative;
  background-color: ${colors.pureWhite};
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

const Right = styled.div``;

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
  font-family: ${fonts.sansserif};
  font-size: 1rem;

  &.active {
    background-color: ${transparentize(0.95, colors.black)};
  }

  &:hover {
    background-color: ${transparentize(0.95, colors.black)};
  }
`;

const LINKS = [
  {
    to: 'projects',
    label: 'Projects',
  },
  {
    to: 'designs',
    label: 'Designs',
  },
  {
    to: 'process',
    label: 'Process',
  },
  {
    to: 'about',
    label: 'About',
  },
];

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <HeaderNav>
      <Container>
        <Nav>
          <Left>
            <Logo />
            {width > 1024 && (
              <Ul>
                {LINKS.map((link) => {
                  return (
                    <Li key={link.to}>
                      <StyledNavLink to={link.to}>{link.label}</StyledNavLink>
                    </Li>
                  );
                })}
              </Ul>
            )}
          </Left>
          <Right>
            {width > 1024 ? (
              <Button to="contact" size="sm">
                Contact
              </Button>
            ) : (
              <MobileNav links={LINKS} />
            )}
          </Right>
        </Nav>
      </Container>
    </HeaderNav>
  );
};

export default Header;
