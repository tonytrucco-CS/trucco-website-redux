import { css } from 'styled-components';
import { breakpoints, fonts } from '../constants/variables';
import { transparentize } from 'polished';

export const typographyCSS = css`
  body {
    font-family: ${fonts.sansserif};
    font-weight: 400;
    color: ${({ theme }) => theme.text};
  }

  h1 {
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    margin-bottom: 0.25em;
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s;

    @media only screen and (max-width: ${breakpoints.sm}) {
      font-size: 1.75em;
    }
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    margin-top: 0;
    font-weight: 500;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }

    @media only screen and (max-width: ${breakpoints.md}) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    margin-bottom: 0.5rem;
    transition: color 0.3s;

    @media only screen and (max-width: ${breakpoints.md}) {
      font-size: 1.25rem;
    }
  }

  p,
  li {
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: ${fonts.sansserif};
    margin-top: 0;
    font-weight: 300;
  }

  p,
  ol,
  ul {
    margin-bottom: 1.5em;
  }

  small {
    color: ${({ theme }) => transparentize(0.4, theme.text)};
    display: block;
    font-family: ${fonts.sansserif};
    line-height: 1.5;
    transition: color 0.3s;
  }

  h2,
  p {
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;
  }

  a {
    color: ${({ theme }) => theme.link};
    transition: color 0.3s;
  }
`;
