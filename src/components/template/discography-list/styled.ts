import styled from 'styled-components';
import { WidthLimiter } from '../../../styles';

export const DiscoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${WidthLimiter}

  width: 100%;
  padding: 1rem;
`;

export const DiscoItem = styled.li`
  width: 20%;
  padding: 1.2rem 1.8rem;
  cursor: pointer;
  transition: 500ms;

  :hover {
    background-color: #444;
    transition: 500ms;
  }
  @media (max-width: 1184px) {
    width: 25%;
  }

  @media (max-width: 968px) {
    width: 33%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`;
export const DiscoImage = styled.img`
  display: block;
  width: auto;
  max-height: 170px;

  margin: 0 auto;
`;

export const DiscoTitle = styled.h3`
  color: white;
  font-family: Noto Sans JP, sans-serif;
  font-weight: 500;
  text-align: center;
  margin: 1rem 0 0.8rem 0;
`;
