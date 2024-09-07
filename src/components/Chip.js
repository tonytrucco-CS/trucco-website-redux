import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { breakpoints, fonts } from '../constants/variables';

const StyledHash = styled(HashLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-family: ${fonts.button};
  border-radius: 1rem;
  width: fit-content;
  border: solid 1px transparent;
  transition: box-shadow 0.3s, background-color 0.3s, border 0.3s, color 0.3s;
  background-color: ${({ theme }) => transparentize(0.9, theme.headerButton)};
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) =>
      transparentize(0.85, theme.headerButton)};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.headerButton)};
  }

  @media only screen and (max-width: ${breakpoints.xs}) {
    font-size: 0.75rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-family: ${fonts.button};
  border-radius: 1rem;
  width: fit-content;
  border: solid 1px transparent;
  transition: box-shadow 0.3s, background-color 0.3s, border 0.3s;
  background-color: ${({ theme }) => transparentize(0.9, theme.headerButton)};

  &:hover:not(.active) {
    background-color: ${({ theme }) =>
      transparentize(0.85, theme.headerButton)};
  }

  &.active {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.2, theme.headerButton)};
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.headerButton)};
  }
`;

const Chip = ({ label, hash, to }) => {
  if (hash) {
    return (
      <StyledHash smooth to={to}>
        {label}
      </StyledHash>
    );
  } else {
    return <StyledLink to={to}>{label}</StyledLink>;
  }
};

export default Chip;
