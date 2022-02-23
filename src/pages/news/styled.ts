import styled from 'styled-components';

export const NewsContainer = styled.div`
  background-color: #292929;
`;

export const NewsList = styled.ul``;

export const PlayIcon = styled.div`
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
  * {
    color: #333;
    font-size: 0.6rem;
  }
`;

export const NewsListItem = styled.li`
  display: flex;
  background-color: #333;
  align-items: center;
  padding: 1.7rem;
  border-bottom: 1px solid #666;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #444;
    transition: 0.5s;
  }
`;

export const NewsTitle = styled.h3`
  color: white;
  font-family: Noto Sans JP, sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.05rem;
  font-weight: 400;
`;

export const NewsDate = styled.span`
  color: white;
  font-family: Noto Sans JP, sans-serif;
  font-size: 1rem;
`;
