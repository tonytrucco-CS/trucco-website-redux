import { transparentize } from 'polished';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { colors, fonts } from '../constants/variables';
import { useOutsideClick } from '../utils/helpers';
import Button from './Button';
import Toggle from './Toggle';

const Div = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  position: absolute;
  background-color: ${({ theme }) => theme.contentBG};
  border-radius: 4px;
  padding: 16px 0;
  min-width: 160px;
  right: 0;
  top: 115%;
  box-shadow: 0 8px 16px ${transparentize(0.85, colors.gray900)};
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px 16px;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => transparentize(0.95, theme.headerButton)};
  border-color: transparent;

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => transparentize(0.9, theme.headerButton)};
    border-color: transparent;
  }

  &:focus {
    background-color: ${({ theme }) => transparentize(0.9, theme.headerButton)};
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.headerButton)};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  padding: 12px 16px;
  font-weight: 400;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  background-color: transparent;
  font-family: ${fonts.sansserif};

  &.active {
    background-color: ${transparentize(0.95, colors.gray900)};
  }
`;

const MobileNav = ({ links, handleToggle }) => {
  const [toggle, setToggle] = useState(false);
  const theme = useTheme();

  const handleClickOutside = () => {
    setToggle(false);
  };

  const ref = useOutsideClick(handleClickOutside);
  return (
    <Div ref={ref}>
      <StyledButton size="sm" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 24 24"
            width="1.5rem"
            fill={theme.text}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 24 24"
            width="1.5rem"
            fill={theme.text}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </StyledButton>
      {toggle && (
        <Nav>
          <Box>
            <Toggle handleToggle={handleToggle} />
          </Box>
          <Ul>
            {links.map((link) => {
              return (
                <Li key={link.to}>
                  <StyledNavLink to={link.to} onClick={() => setToggle(false)}>
                    {link.label}
                  </StyledNavLink>
                </Li>
              );
            })}
          </Ul>
        </Nav>
      )}
    </Div>
  );
};

export default MobileNav;
