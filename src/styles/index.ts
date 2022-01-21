import { createGlobalStyle, css } from 'styled-components';
import ResetCSS from './reset';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
`;

export const WidthLimiter = css`
  max-width: 1300px;
  margin: 0 auto;
`;
