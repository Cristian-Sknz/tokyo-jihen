import styled from 'styled-components';

export const Main = styled.main`
  background-color: #292929;
  border: 0.65rem solid #777;
  border-radius: 0.5rem;
  grid-area: main;
  z-index: 3;
  overflow: auto;
  width: 100%;
`;

export const MainWithScrollbar = styled(Main)`
  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background: #777;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border: 3px solid #333;
    border-radius: 20px;
  }
`;