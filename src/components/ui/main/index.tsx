import React from 'react';
import classNames from 'classnames';
import { useRemoteControl } from '../remote-control/context';
import { MainWithScrollbar } from './styled';

type MainProps = {
  children?: JSX.Element | JSX.Element[];
};

const Main: React.FC<MainProps> = ({ children }) => {
  const { misc: { overflow, main } } = useRemoteControl();

  return (
    <MainWithScrollbar 
      className={classNames({ overflow })} 
      ref={main}>
      {children}
    </MainWithScrollbar>
  );
};

export default Main;
