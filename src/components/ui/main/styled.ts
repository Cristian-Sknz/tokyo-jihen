import styled from 'styled-components';
import { ScrollbarCSS } from '../../../styles';

export const Main = styled.main`
  background-color: #292929;
  border: 0.65rem solid #777;
  border-radius: 0.5rem;
  grid-area: main;
  z-index: 3;
  overflow: auto;
  width: 100%;
  position: relative;

  @media screen and (max-width: 800px) {
    border: 0.2rem solid #777;
  }
`;

export const MainWithScrollbar = styled(Main)`
  ${ScrollbarCSS}
`;