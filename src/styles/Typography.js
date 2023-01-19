import { css } from 'styled-components';
import { fonts } from '../constants/variables';

export const typographyCSS = css`
  body {
    font-family: ${fonts.body};
    font-weight: 400;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 400;
  }
`;