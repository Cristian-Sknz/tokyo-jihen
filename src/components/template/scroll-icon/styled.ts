import styled, { css, keyframes } from 'styled-components';

const ScrollMove = keyframes`
  0% {
    transform: rotate(90deg) translateX(0);
  }

  100% {
    transform: rotate(90deg) translateX(.7rem);
  }
`;

const BeforeAnimation = keyframes`
  0% {
    width: 0px;
  }
  
  100% {
    width: 140px;
  }
`;

export const ScrollBefore = css`
  ::before {
    content: "";
    position: absolute;
    
    height: 1px;
    bottom: -2px;
    background-color: white;

    animation: ${BeforeAnimation} 2s infinite alternate;
  }
`;

export const ScrollAfter = css`
  ::after {
    content: "";
    position: absolute;
    bottom: -4px;
    right: -25px;
    display: inline-block;
    transform: rotate(-90deg);
    border-width: 0px 0 12px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
  }
`

export const ScrollText = styled.span`
  ${ScrollBefore}
  --spacing: .3rem;
  position: absolute;
  top: 75%;
  transform: rotate(90deg);
  right: calc(var(--spacing) * -5);
  
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  color: white;
  letter-spacing: var(--spacing);
  animation: ${ScrollMove} 1.8s alternate infinite;
  ${ScrollAfter}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;