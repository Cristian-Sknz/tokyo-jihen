import styled from 'styled-components';
import { WidthLimiter } from '../../styles';

export const BiographyContainer = styled.div`
  background-color: #292929;
`;

export const BiographyTextContainer = styled.div`
${WidthLimiter}
  padding: 1rem 1.1rem;
`;

export const BiographyText = styled.p`
  color: white;
  font-weight: 300;
  font-family: Noto Sans JP, sans-serif;
  font-size: 1.01rem;
  line-height: 1.45;
`;

export const BiographyMembersContainer = styled.div`
  ${WidthLimiter}
`;

export const BiographyMembers = styled.ul`
  margin: 1rem;
`;
