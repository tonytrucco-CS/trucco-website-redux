import { lighten, transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors, fonts } from '../constants/variables';

const StyledButton = styled.button`
  background-color: ${colors.button};
  border: solid 1px ${colors.button};
  color: ${colors.white};
  ${(props) => {
    switch (props.size) {
      case 'xs':
        return css`
          padding: ${props.square ? '0.25rem' : '0.25rem 0.5rem'};
          font-size: 1rem;
        `;
      case 'sm':
        return css`
          padding: ${props.square ? '0.5rem' : '0.5rem 1rem'};
          font-size: 1.25rem;
        `;
      default:
        return css`
          padding: ${props.square ? '1.5rem' : '0.75rem 1rem'};
          font-size: 1.25rem;
        `;
    }
  }}
  border-radius: 0.35rem;
  display: flex;
  font-family: ${fonts.sansserif};
  font-weight: 300;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: ${props => props.block ? '100%' : 'auto'};
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover:not([disabled]) {
    cursor: pointer;
    background-color: ${lighten(0.1, colors.button)};
    border: solid 1px ${lighten(0.1, colors.button)};
  }

  svg {
    fill: ${colors.white};
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${transparentize(0.5, colors.button)};
  }
`;

const StyledLink = styled(Link)`
  background-color: ${colors.button};
  border: solid 1px ${colors.button};
  color: ${colors.white};
  text-decoration: none;
  ${(props) => {
    switch (props.size) {
      case 'xs':
        return css`
          padding: ${props.square ? '0.25rem' : '0.25rem 0.5rem'};
          font-size: 1rem;
        `;
      case 'sm':
        return css`
          padding: ${props.square ? '0.5rem' : '0.5rem 1rem'};
          font-size: 1rem;
        `;
      default:
        return css`
          padding: ${props.square ? '1.5rem' : '0.75rem 1rem'};
          font-size: 1.25rem;
        `;
    }
  }}
  border-radius: 0.35rem;
  display: flex;
  font-family: ${fonts.sansserif};
  font-weight: 300;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: ${props => props.block ? '100%' : 'auto'};
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover:not([disabled]) {
    cursor: pointer;
    background-color: ${lighten(0.1, colors.button)};
    border: solid 1px ${lighten(0.1, colors.button)};
  }

  svg {
    fill: ${colors.white};
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${transparentize(0.5, colors.button)};
  }
`;

const Button = ({
  children,
  onClick,
  disabled,
  autoFocus,
  active,
  size,
  square,
  block,
  to,
  ...props
}) => {
  if (!to) {
    return (
      <StyledButton
        disabled={disabled}
        onClick={onClick}
        autoFocus={autoFocus}
        active={active}
        size={size}
        square={square}
        block={block}
      >
        {children}
      </StyledButton>
    );
  } else {
    return (
      <StyledLink
        disabled={disabled}
        onClick={onClick}
        autoFocus={autoFocus}
        active={active}
        size={size}
        square={square}
        to={to}
      >
        {children}
      </StyledLink>
    )
  }
};

export default Button;
