import { css } from 'styled-components';
import { colors, fonts } from '../constants/variables';

export const globalCSS = css`
  body,
  html {
    margin: 0;
    height: 100%;
    font-size: 1rem;
  }

  #root {
    height: 100%;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    background-image: url('/white-paper-background.jpg');
    background-color: ${colors.white};
    font-family: ${fonts.sansserif};
  }
`;
