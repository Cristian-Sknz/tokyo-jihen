import styled from 'styled-components';
import { MarkdownWrapper } from '../../ui/markdown';

export const ReleaseAlbumContainer = styled.section`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #666;
  :last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 0;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 3.5rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const ReleaseImage = styled.img`
  width: 300px;
  @media screen and (max-width: 800px) {
    max-width: 570px;
    width: 90%;
  }
`;

export const ReleaseContent = styled.div`
  flex: 1;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const Button = styled.div`
  display: inline-block;
  background-color: #65635c;
  border-radius: .3rem;
  transition: 350ms;
  :hover {
    background-color: #888;
    transition: 350ms;
  }
`

export const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  color: white;
  text-decoration: none;
`;

export const ButtonIcon = styled.div`
  background-color: white;
  margin-right: .5rem;
  border-radius: 50%;
  padding: .2rem;
  aspect-ratio: 1/1;
  font-size: 12px;
`

export const MarkdownContainer = styled(MarkdownWrapper)`
  padding: 0;
  margin-bottom: 1rem;
`;
