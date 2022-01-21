import React from 'react';
import { Side, SideImage } from './styled';

const Left: React.FC = () => {
  return (
    <Side className='left'>
      <SideImage 
        alt='speaker' 
        className='left' 
        src='/images/speaker_l.png'/>
    </Side>
  );
};

export default Left;
