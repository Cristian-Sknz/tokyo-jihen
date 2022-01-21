import React from 'react';
import classNames from 'classnames';
import { LoadingContainer, TokyoIncidentsLogoAnimated } from './styled';

type LoadingProps = {
  withBottom?: boolean;
}

const Loading: React.FC<LoadingProps> = ({withBottom}) => {
  return (
    <LoadingContainer className={classNames({'bottom': withBottom})}>
      <TokyoIncidentsLogoAnimated alt={'Tokyo Jihen Logo Animated'}/>
    </LoadingContainer>
  );
};

export default Loading;
