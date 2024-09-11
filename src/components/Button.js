import { lighten, transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';
import { fonts } from '../constants/variables';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  border: solid 1px ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  ${(props) => {
    switch (props.size) {
      case 'xs':
        return css`
          padding: ${props.square ? '4px' : '4px 8px'};
          font-size: 0.5rem;
        `;
      case 'sm':
        return css`
          padding: ${props.square ? '8px' : '8px 16px'};
          font-size: 0.75rem;
        `;
      default:
        return css`
          padding: ${props.square ? '1.5rem' : '0.65rem 16px'};
          font-size: 1rem;
        `;
    }
  }}
  border-radius: 4px;
  display: flex;
  font-family: ${fonts.button};
  font-weight: 400;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: ${(props) => (props.$block ? '100%' : 'fit-content')};
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

  &:hover:not([disabled]) {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.1, theme.buttonBackground)};
    border: solid 1px ${({ theme }) => lighten(0.1, theme.buttonBackground)};
  }

  svg {
    fill: ${(theme) => theme.buttonText};
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.buttonBackground)};
  }
`;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.buttonBackground};
  border: solid 1px ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  text-decoration: none;
  ${(props) => {
    switch (props.size) {
      case 'xs':
        return css`
          padding: ${props.square ? '4px' : '4px 8px'};
          font-size: 0.75rem;
        `;
      case 'sm':
        return css`
          padding: ${props.square ? '8px' : '8px 16px'};
          font-size: 0.75rem;
        `;
      default:
        return css`
          padding: ${props.square ? '1.5rem' : '0.65rem 16px'};
          font-size: 1rem;
        `;
    }
  }}
  border-radius: 4px;
  display: flex;
  font-family: ${fonts.button};
  font-weight: 500;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: ${(props) => (props.$block ? '100%' : 'fit-content')};
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover:not([disabled]) {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.1, theme.buttonBackground)};
    border: solid 1px ${({ theme }) => lighten(0.1, theme.buttonBackground)};
  }

  svg {
    fill: ${({ theme }) => theme.buttonText};
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.buttonBackground)};
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
  const theme = useTheme();
  if (!to) {
    return (
      <StyledButton
        disabled={disabled}
        onClick={onClick}
        autoFocus={autoFocus}
        active={active}
        size={size}
        square={square}
        $block={block}
        theme={theme}
        {...props}
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
        $block={block}
        theme={theme}
      >
        {children}
      </StyledLink>
    );
  }
};

export default Button;
