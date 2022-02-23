import styled from 'styled-components';

export const ImageContainer = styled.div``;
export const Image = styled.img`
  width: 90%;
  height: 100%;
  max-width: 520px;
  display: block;
  margin: 0 auto;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    max-width: 600px;
  }
`;