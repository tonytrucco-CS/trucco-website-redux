import { css } from 'styled-components';

export const globalCSS = css`
  body,
  html {
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
`;
