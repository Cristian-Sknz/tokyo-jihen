import React from 'react';
import { DiscographyContainer } from '../styled';
import AlbumList from '../../../assets/album.json';
import DiscographyList from '../../../components/template/discography-list';

const DiscographyAlbum: React.FC = () => {
  return (
    <DiscographyContainer>
      <DiscographyList items={AlbumList}/>
    </DiscographyContainer>
  );
}

export default DiscographyAlbum;