import styled from 'styled-components';

export const BiographyMember = styled.li`
  display: flex;
  padding: 2rem 0;
  gap: 1rem;
  border-top: 1px solid #666;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const MemberImageContainer = styled.div`
  width: 200px;

  @media screen and (max-width: 800px) {
    align-self: center;
    width: 80%;
  }
`;
export const MemberImage = styled.img`
  width: 100%;
  min-width: 200px;
`;
export const MemberBiographyContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  color: white;
  font-weight: 300;
  font-family: Noto Sans JP, sans-serif;
  line-height: 1.3;
  letter-spacing: 1px;
`;

export const MemberFunction = styled.div`
 & span {
   display: block;
   font-size: .7rem;
   margin-bottom: .4rem;
   line-height: 1;
   text-transform: uppercase;
 }
 & :is(h2, h3) {
   display: inline-block;
   font-size: 1.7rem;
   letter-spacing: 0px;
   :is(h3) {
     margin: 0 .5rem;
    font-size: 1.2rem;
   }
 }
`;
export const MemberBirth = styled.div``;
export const MemberBiography = styled.p`
  font-size: .95rem;
  word-break: break-all;
`;
