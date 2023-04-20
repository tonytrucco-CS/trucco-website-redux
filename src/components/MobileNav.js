import { transparentize } from 'polished';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../constants/variables';
import { useOutsideClick } from '../utils/helpers';
import Button from './Button';

const Div = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  position: absolute;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  padding: 1rem;
  right: 0;
  top: 115%;
  box-shadow: 0 0.5rem 1rem ${transparentize(0.85, colors.black)};
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

const StyledNavLink = styled(NavLink)`
  color: ${colors.button};
  padding: 1rem;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  background-color: transparent;
  font-family: ${fonts.sansserif};

  &.active {
    background-color: ${transparentize(0.95, colors.black)};
  }
`;

const MobileNav = ({ links }) => {
  const [toggle, setToggle] = useState(false);

  const handleClickOutside = () => {
    setToggle(false);
  };

  const ref = useOutsideClick(handleClickOutside);
  return (
    <Div ref={ref}>
      <Button size="sm" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </Button>
      {toggle && (
        <Nav>
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
            <Li>
              <StyledNavLink to="/contact" onClick={() => setToggle(false)}>
                Contact
              </StyledNavLink>
            </Li>
          </Ul>
        </Nav>
      )}
    </Div>
  );
};

export default MobileNav;
