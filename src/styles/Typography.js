import { css } from 'styled-components';
import { colors, fonts } from '../constants/variables';

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

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    margin-top: 0;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${colors.midGray};
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  p, li {
    line-height: 1.5;
    font-size: 1.25rem;
    font-family: ${fonts.serif};
    margin-top: 0;
  }
`;