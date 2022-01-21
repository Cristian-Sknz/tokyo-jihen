import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { SocialMedia, SocialMediasList } from '../styled';

const SocialMedias: React.FC = () => {
  return (
    <div className='SocialMedias'>
      <SocialMediasList>
        <SocialMedia icon={faFacebookSquare} />
        <SocialMedia icon={faTwitterSquare} />
        <SocialMedia className='menu' icon={faSquare} />
      </SocialMediasList>
    </div>
  );
};

export default SocialMedias;
