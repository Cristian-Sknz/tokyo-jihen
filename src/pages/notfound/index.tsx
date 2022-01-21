import React from 'react';
import {
  NotFoundButton,
  NotFoundContainer,
  NotFoundLogo,
  NotFoundText,
} from './styled';

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundLogo />
      <NotFoundText>あなたが要求したページは見つかりませんでした </NotFoundText>
      <NotFoundButton to={'/'}>Back to start</NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFound;
