import styled from 'styled-components';

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
`;