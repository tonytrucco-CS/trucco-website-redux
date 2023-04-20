import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { colors, defaults } from '../constants/variables';

const StyledHash = styled(HashLink)`
  text-decoration: none;
  color: ${colors.button};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: fit-content;
  border: solid 1px transparent;
  transition: box-shadow 0.3s, background-color 0.3s, border 0.3s;
  background-color: ${transparentize(0.9, colors.black)};

  &:hover {
    background-color: ${transparentize(0.85, colors.black)};
  }

  &:focus {
    outline: none;
    border: solid 1px ${defaults.border};
    box-shadow: 0 0 0 3px ${transparentize(0.95, colors.black)};
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.button};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: fit-content;
  border: solid 1px transparent;
  transition: box-shadow 0.3s, background-color 0.3s, border 0.3s;
  background-color: ${transparentize(0.9, colors.black)};

  &:hover:not(.active) {
    background-color: ${transparentize(0.85, colors.black)};
  }

  &.active {
    background-color: ${colors.black};
    color: ${colors.white};

    &:hover {
      background-color: ${transparentize(0.2, colors.black)};
    }
  }

  &:focus {
    outline: none;
    border: solid 1px ${defaults.border};
    box-shadow: 0 0 0 3px ${transparentize(0.95, colors.black)};
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
