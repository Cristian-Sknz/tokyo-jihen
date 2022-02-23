import React from 'react';
import {
  BiographyMember as StyledBiographyMember,
  MemberBiography,
  MemberBiographyContainer,
  MemberBirth,
  MemberFunction,
  MemberImage,
  MemberImageContainer,
} from './styled';

type Member = {
  name: string;
  name_romanized: string;
  image: string;
  nickname: string;
  birthdate: string;
  birthplace: string;
  japanese_zodiac: string;
  member: string;
  bio: string;
};

type BiographyMemberProps = {
  data: Member;
};

const BiographyMember: React.FC<BiographyMemberProps> = ({
  data: { bio, ...data },
}) => {
  return (
    <StyledBiographyMember>
      <MemberImageContainer>
        <MemberImage src={data.image} />
      </MemberImageContainer>

      <MemberBiographyContainer>
        <MemberFunction>
          <span>{data.member}</span>
          <h2>{data.name}</h2>
          <h3>{data.nickname}</h3>
        </MemberFunction>

        <MemberBirth>
          <p>{data.birthdate}</p>
          <p>{data.japanese_zodiac}</p>
          <p>{data.birthplace}</p>
        </MemberBirth>

        <MemberBiography>
          {bio.split('\n').map((text) => (
            <React.Fragment>
              {text}<br />
            </React.Fragment>
          ))}
        </MemberBiography>
      </MemberBiographyContainer>
    </StyledBiographyMember>
  );
};

export default BiographyMember;
