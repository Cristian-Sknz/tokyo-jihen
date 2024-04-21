import styled from "styled-components";
import { ScrollbarCSS } from '../../../../styles';

export const PopupContainer = styled.div`
  ${ScrollbarCSS}
  &.visible {
    display: flex;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 1300px)  {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2b2a2a;
  z-index: 3;
  overflow: auto;
`