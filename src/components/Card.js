import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../constants/variables';
import Button from './Button';

const Box = styled.div`
  background-color: ${({ theme }) => theme.contentBG};
  transition: background-color 0.3s;
  border-radius: 0.125rem;
  ${(props) => {
    if (props.hero) {
      return css`
        display: ${(props) => (props.$flex ? 'flex' : null)};
        justify-content: ${(props) => (props.$flex ? 'center' : null)};
        padding: 4em 2em;
        margin: 4em 0;

        @media only screen and (max-width: ${breakpoints.sm}) {
          padding: 2em 1em;
          margin: 2em 0;
        }
      `;
    } else {
      return css`
        padding: 1rem;
        background-color: ${transparentize(0.97, colors.gray900)};
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
