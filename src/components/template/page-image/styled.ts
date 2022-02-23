import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: calc(100vh - 165px);

  
  @media screen and (max-width: 800px) {
    height: calc(100vh - 400px);
  }
`;
export const Image = styled.img`
  width: 90%;
  height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    max-width: 600px;
  }
`;