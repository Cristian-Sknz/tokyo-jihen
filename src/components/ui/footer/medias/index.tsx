import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { SocialMedia, SocialMediasList } from '../styled';
import { useRemoteControl } from '../../remote-control/context';

const SocialMedias: React.FC = () => {
  const { toggle } = useRemoteControl()
  return (
    <div className='SocialMedias'>
      <SocialMediasList>
        <SocialMedia icon={faFacebookSquare} />
        <SocialMedia icon={faTwitterSquare} />
        <SocialMedia 
          className='menu' 
          icon={faSquare} 
          onClick={toggle}
          />
      </SocialMediasList>
    </div>
  );
};

export default SocialMedias;
