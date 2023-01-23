import { css } from 'styled-components';
import { fonts } from '../constants/variables';

export const typographyCSS = css`
  body {
    font-family: ${fonts.sansserif};
    font-weight: 400;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    line-height: 1.5;
    margin: 0 auto;
    max-width: 35em;
    font-size: 1.25rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    font-family: ${fonts.serif};
  }
`;