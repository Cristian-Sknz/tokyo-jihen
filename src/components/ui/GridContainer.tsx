import styled from 'styled-components';

const GridContainer = styled.div`
  background: linear-gradient(to top right, rgba(55,54,51,1) 0%, rgba(15,12,23,1) 100%);

  display: grid; 
  grid-template-columns: 46px 1fr 46px; 
  grid-template-rows: 40px 1fr 83px; 
  gap: 0px 0px; 
  grid-template-areas: 
    "left top right"
    "left main right"
    "left footer right"; 
  padding: .5rem;
  height: 100vh;
`;

export default GridContainer;