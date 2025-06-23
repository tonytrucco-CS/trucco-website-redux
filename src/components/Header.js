import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, fonts } from '../constants/variables';
import useWindowDimensions from '../utils/helpers';
import Container from './Container';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Toggle from './Toggle';

const HeaderNav = styled.header`
  width: 100%;
  z-index: 10;
  position: relative;
  background-color: ${({ theme }) => theme.contentBG};
  height: 4rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 0 16px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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

const Box = styled.div`
  width: 144px;
  display: flex;
  justify-content: ${(props) => (props.$right ? 'flex-end' : 'flex-start')};
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  padding: 16px 24px;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  background-color: transparent;
  font-family: ${fonts.sansserif};
  font-size: 1rem;
  font-weight: 400;

  &.active {
    background-color: ${({ theme }) =>
      transparentize(0.9, theme.buttonBackground)};
  }

  &:hover {
    background-color: ${({ theme }) =>
      transparentize(0.9, theme.buttonBackground)};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.buttonBackground)};
    outline: 0;
  }
`;

const LINKS = [
  {
    to: 'projects',
    label: 'Case Studies',
  },
  {
    to: 'process',
    label: 'Process',
  },
  {
    to: 'designs',
    label: 'Other Projects',
  },
  {
    to: 'about',
    label: 'About',
  },
  {
    to: 'contact',
    label: 'Contact',
  },
];

const Header = ({ toggleTheme }) => {
  const { width } = useWindowDimensions();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <HeaderNav>
      <Container>
        <Div>
          <Box>
            <Logo />
          </Box>
          <Nav>
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
          </Nav>
          {width > 1024 ? (
            <Box $right>
              <Toggle handleToggle={handleToggle} />
            </Box>
          ) : (
            <MobileNav links={LINKS} handleToggle={handleToggle} />
          )}
        </Div>
      </Container>
    </HeaderNav>
  );
};

export default Header;
