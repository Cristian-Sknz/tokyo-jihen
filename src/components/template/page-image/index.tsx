import React, { ImgHTMLAttributes } from 'react';
import { Image, ImageContainer } from './styled';

const PageImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <ImageContainer>
      <Image {...props} alt={'a'}/>
    </ImageContainer>
  );
};

export default PageImage;