import React from 'react';
import { MainWithScrollbar } from './styled';

type MainProps = {
  children?: JSX.Element | JSX.Element[];
};

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainWithScrollbar>{children}</MainWithScrollbar>;
};

export default Main;
