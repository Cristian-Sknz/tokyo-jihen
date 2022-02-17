import styled from 'styled-components';
import { WidthLimiter } from '../../styles';

export const LiveContainer = styled.div`
  background-color: #292929;
`;

export const LiveList = styled.ul``;

export const ArrowIconContainer = styled.div`
  min-width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  display: inline-block;
  background-color: white;

  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  transition: 0.5s;
  svg {
    color: #333;
    font-size: 0.6rem;
  }
`;

export const LiveListItem = styled.li`
  display: flex;
  background-color: #333;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  border-bottom: 1px solid #666;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #444;
    transition: 0.5s;
  }

  &.active ${ArrowIconContainer}{
      transform: rotate(-90deg);
      transition: 0.5s;
    }
`;

export const LiveTitle = styled.h3`
  color: white;
  font-family: Noto Sans JP, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  font-weight: 300;
`;


export const PastLiveContainer = styled.div``;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.2rem 0.6rem;
  ${WidthLimiter}
  border-bottom: 1px solid #666;

  cursor: default;

  color: white;
  font-family: Noto Sans JP, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`