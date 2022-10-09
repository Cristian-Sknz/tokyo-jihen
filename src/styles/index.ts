import { createGlobalStyle, css } from 'styled-components';
import ResetCSS from './reset';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
`;

export const WidthLimiter = css`
  max-width: 1300px;
  margin: 0 auto;
`;

export const ScrollbarCSS = css`
  overflow: hidden;
  &.overflow {
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background: #777;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #222;
    border: 3px solid #222;
    border-radius: 20px;
  }

  @media screen and (max-width: 800px) {
    ::-webkit-scrollbar {
      width: 0.3rem;
    }
  }
`
