import React from 'react';
import PageTitle from '.';
import { TitleHeader } from './styled';

type PageHeaderProps = {
  title: string;
  children?: JSX.Element | JSX.Element[] | string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <TitleHeader>
      <PageTitle>{title}</PageTitle>
      {children}
    </TitleHeader>
  );
};

export default PageHeader;