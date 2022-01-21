import React from 'react';
import { DiscographyTitle, TitleContainer, TokyoIncidentsLogo } from './styled';

type PageTitleProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <TitleContainer>
      <TokyoIncidentsLogo alt='Tokyo Jihen Logo'/>
      <DiscographyTitle>{children}</DiscographyTitle>
    </TitleContainer>
  );
};

export default PageTitle;