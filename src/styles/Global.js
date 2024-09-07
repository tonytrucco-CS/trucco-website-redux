import { css } from 'styled-components';
import { fonts } from '../constants/variables';

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
    background-color: ${({ theme }) => theme.background};
    font-family: ${fonts.sansserif};
    transition: background-color 0.3s, color 0.3s;
  }
`;
