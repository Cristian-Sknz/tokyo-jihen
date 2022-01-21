import React from 'react';
import DiscographyList from '../../../components/template/discography-list';
import { DiscographyContainer } from '../styled';
import DvDList from '../../../assets/dvd.json';

const DiscographyDvD: React.FC = () => {
  return (
    <DiscographyContainer>
      <DiscographyList items={DvDList} />
    </DiscographyContainer>
  );
};

export default DiscographyDvD;
