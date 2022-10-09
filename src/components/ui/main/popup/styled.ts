import styled from "styled-components";
import { ScrollbarCSS } from '../../../../styles';
import { SocialMedia } from "../../footer/styled";

export const PopupContainer = styled.div`
  ${ScrollbarCSS}
  &.visible {
    display: block;
  }
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2b2a2a;
  z-index: 3;
  overflow: auto;
`

export const CloseButton = styled(SocialMedia)`
  font-size: 1.3rem;
  position: absolute;
  top: 1.3rem;
  right: 1.2rem;
  
  &.menu a {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    z-index: 11;
  }
`