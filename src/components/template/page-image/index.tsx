import React, { ImgHTMLAttributes } from 'react';
import { Image, ImageContainer } from './styled';

type PageImageProps = {
  srcSet?: string[];
  sizes?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'srcSet'>

type PageImageComponent = React.FC<PageImageProps>

const PageImage: PageImageComponent = ({srcSet, ...props}) => {
  return (
    <ImageContainer>
      <Image {...props} srcSet={format(srcSet)} alt={'a'}/>
    </ImageContainer>
  );
};

function format(srcset?: string[]) {
  return srcset ? srcset.join(',\n') : undefined
}

export default PageImage;