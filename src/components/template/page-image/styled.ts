import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px - 73px - 30px);
  margin: 0;
`;

export const Image = styled.img`
  font-family: 'object-fit: cover; object-position: 50% center;';
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;