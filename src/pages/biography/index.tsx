import React from 'react';
import BiographyImage from '../../components/template/page-image';
import PageTitle from '../../components/template/page-title';
import {
  BiographyContainer,
  BiographyMembers,
  BiographyMembersContainer,
  BiographyText,
  BiographyTextContainer,
} from './styled';
import BiographyJson from '../../assets/biography.json';
import BiographyMember from './members';
import ScrollIcon from '../../components/template/scroll-icon';

const Biography: React.FC = () => {
  const { members, ...bio } = BiographyJson;

  return (
    <BiographyContainer>
      <BiographyImage src={bio.image} loading={'eager'} />
      <PageTitle>Biography</PageTitle>
      <ScrollIcon/>
      <BiographyTextContainer>
        <BiographyText>
          {bio.description.split('\n').map((text) => (
            <React.Fragment>
              {text}<br />
            </React.Fragment>
          ))}
        </BiographyText>
      </BiographyTextContainer>

      <BiographyMembersContainer>
        <BiographyMembers>
          {members.map((member) => (
            <BiographyMember key={member.name_romanized} data={member} />
          ))}
        </BiographyMembers>
      </BiographyMembersContainer>
    </BiographyContainer>
  );
};

export default Biography;