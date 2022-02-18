import styled from 'styled-components';
import { WidthLimiter } from '../../../styles';
import logo from '../../../ttl_logo.svg';


export const TitleHeader = styled.header`
  background-color: #292929;
  font-family: Outfit;
  
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem 0.8rem;
  ${WidthLimiter}
  border-bottom: 1px solid #666;

  user-select: none;
  cursor: default;
`;

export const TokyoIncidentsLogo = styled.img`
  content: url(${logo});

  filter: contrast(0.3) brightness(5);
  width: 48px;
`;

export const DiscographyTitle = styled.h1`
  margin: 0 1rem;
  display: inline-block;
  color: white;
  font-size: 2.2rem;
  font-style: italic;
  text-transform: uppercase;
  vertical-align: top;
  font-weight: 300;
  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`