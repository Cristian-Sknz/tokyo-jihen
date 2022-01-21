import React from 'react';
import DiscographyList from '../../../components/template/discography-list';
import { DiscographyContainer } from '../styled';
import SingleList from '../../../assets/singles.json';


const DiscographySingle: React.FC = () => {
  return (
    <DiscographyContainer>
      <DiscographyList items={SingleList}/>
    </DiscographyContainer>
  );
};

export default DiscographySingle;
