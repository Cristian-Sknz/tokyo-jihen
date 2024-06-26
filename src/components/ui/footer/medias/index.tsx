import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { SocialMedia, SocialMediasList, MenuText } from '../styled';
import { useRemoteControl } from '../../remote-control/context';

const SocialMedias: React.FC = () => {
  const { misc: { btn } } = useRemoteControl()
  return (
    <div className='social-medias'>
      <SocialMediasList>
        <SocialMedia 
          href={'http://www.facebook.com/share.php?u=https://www.tokyojihen.com/'} 
          icon={faFacebookSquare} />
        <SocialMedia 
          href={'http://twitter.com/share?text=【東京事変】最新ニュースやリリース情報はこちらでチェック！！&url=https://www.tokyojihen.com/&hashtags=東京事変&related=nekoyanagi_line,umusicjapan'} 
          icon={faTwitterSquare} />
        <SocialMedia 
          className={btn.current.type} 
          icon={faSquare} 
          onClick={btn.current.onClick}
          >
            <MenuText className={btn.current.type}>{btn.current.text}</MenuText>
        </SocialMedia>
      </SocialMediasList>
    </div>
  );
};

export default SocialMedias;
