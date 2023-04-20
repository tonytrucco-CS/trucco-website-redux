import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../constants/variables';
import Button from './Button';

const Box = styled.div`
  background-color: ${colors.white};
  border-radius: 0.125rem;
  ${(props) => {
    if (props.hero) {
      return css`
        display: ${(props) => (props.$flex ? 'flex' : null)};
        justify-content: ${(props) => (props.$flex ? 'center' : null)};
        box-shadow: 0 0.5rem 1rem ${transparentize(0.9, colors.black)};
        padding: 2rem;
        margin-bottom: 2rem;

        &:last-of-type {
          margin-bottom: 4rem;
        }

        @media only screen and (max-width: ${breakpoints.sm}) {
          padding: 1rem;
        }
      `;
    } else {
      return css`
        padding: 1rem;
        background-color: ${transparentize(0.97, colors.black)};
      `;
    }
  }}
`;

const Card = ({ children, hero, to, linkText, flex }) => {
  return (
    <Box hero={hero} $flex={flex}>
      {children}
      {to && linkText && (
        <Button block to={to}>
          {linkText}
        </Button>
      )}
    </Box>
  );
};

export default Card;
