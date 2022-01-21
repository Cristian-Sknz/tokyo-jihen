import React from 'react';
import { Side, SideImage } from './styled';

const Right: React.FC = () => {
  return (
    <Side className='right'>
      <SideImage 
        alt='speaker' 
        className='right' 
        src='/images/speaker_r.png' />
    </Side>
  );
};

export default Right;
