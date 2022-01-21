import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TokyoIncidentsLogo } from '../../components/template/page-title/styled';

export const NotFoundLogo = styled(TokyoIncidentsLogo)`
  width: 100px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #333;
  width: 100%;
  height: 100%;
`;

export const NotFoundText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-family: Outfit;
  margin: 1rem 0;
`;

export const NotFoundButton = styled(Link)`
  background-color: #888;
  border-radius: .3rem;
  padding: .8rem .4rem;
  font-family: Outfit;
  color: white;
  text-decoration: none;
`;