import styled, { keyframes } from 'styled-components';
import { TokyoIncidentsLogo } from '../page-title/styled';

export const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
	&.bottom {
		bottom: 50%;
	}
`;

export const LogoAnimation = keyframes`
	0% {
		transform: scale(0.95);
		filter: contrast(0.3) brightness(1) drop-shadow(0 0 0 rgba(0, 150, 255, .5));
	}

	70% {
		transform: scale(1);
		filter: contrast(0.3) brightness(5) drop-shadow(0 0 20px rgba(0, 0, 0, 0));
	}

	100% {
		transform: scale(0.95);
		filter: contrast(0.3) brightness(1) drop-shadow(0 0 0 rgba(0, 0, 0, 0));
	}
`;

export const TokyoIncidentsLogoAnimated = styled(TokyoIncidentsLogo)`
	display: block;
  width: 180px;
  animation: ${LogoAnimation} 2.5s infinite;
`;
