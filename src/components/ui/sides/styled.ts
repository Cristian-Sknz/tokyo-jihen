import styled from 'styled-components';

export const Side = styled.div`
  grid-area: ${(props) => props.className};
  position: relative;
`;

export const SideImage = styled.img`
  position: absolute;
  bottom: 0;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`