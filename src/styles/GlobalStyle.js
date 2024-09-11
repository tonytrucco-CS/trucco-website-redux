import { createGlobalStyle } from 'styled-components';

import { globalCSS } from './Global';
import { typographyCSS } from './Typography';
import { useContext } from 'react';
import FontSizeContext from '../context/FontSizeContext';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${(props) => props.fontSize}px;
  }

  ${() => globalCSS}
  ${() => typographyCSS}
`;

const GlobalFontSizeStyle = () => {
  const { fontSize } = useContext(FontSizeContext);

  return <GlobalStyle fontSize={fontSize} />;
};

export default GlobalFontSizeStyle;
