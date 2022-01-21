import React from 'react';
import DiscographyList from '../../../components/template/discography-list';
import { DiscographyContainer } from '../styled';
import OtherList from '../../../assets/other.json';

const DiscographyOther: React.FC = () => {
  return (
    <DiscographyContainer>
      <DiscographyList items={OtherList} />
    </DiscographyContainer>
  );
};

export default DiscographyOther;
