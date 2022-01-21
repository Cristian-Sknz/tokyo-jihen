import React from 'react';

import SocialMedias from './medias';
import Navbar from './navbar';
import { FooterContainer, TokyoIncidentsLogo } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Navbar/>
      <TokyoIncidentsLogo alt='Logo'/>
      <SocialMedias/>
    </FooterContainer>
  );
};

export default Footer;
