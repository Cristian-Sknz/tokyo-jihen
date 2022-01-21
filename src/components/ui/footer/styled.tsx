import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, LinkProps } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../../../logo.svg';

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: space-between;
  margin: 0 2.2rem;
  grid-area: footer;
`;

export const TokyoIncidentsLogo = styled.img`
  --logo-width: 170px;

  content: url(${logo});
  position: absolute;

  width: var(--logo-width);
  left: calc(50% - var(--logo-width) / 2);
  filter: contrast(0.3);
  transition: 500ms;

  :hover {
    filter: contrast(0.3) brightness(5);
    transition: 1s;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;
  user-select: none;
`;

export const NavigationItems = styled.ul``;

const NavigationItemContainer = styled.li`
  display: inline-block;
  margin: 0 0.12rem;
  cursor: pointer;
`;

const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;

  min-width: 25px;
  min-height: 25px;
  transition: 500ms;

  & {
    color: #373633;
    font-size: 1rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    text-decoration: none;
  }

  & {
    background-color: #666;
    :hover {
      background-color: #bb0000;
      transition: 500ms;
    }
    &.active {
      background-color: #d10000;
    }
  }
`;

export const NavigationItem: React.FC<LinkProps> = (props) => {
  return (
    <NavigationItemContainer>
      <NavigationLink {...props}>{props.children}</NavigationLink>
    </NavigationItemContainer>
  );
};

export const NavigationDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  text-transform: uppercase;

  background-color: #acc6c7;
  color: #333;
  min-width: 145px;
  margin-left: 0.7rem;
  height: 26px;
  text-align: center;
  border: 3px solid #6b6b6b;
`;

export const SocialMediasList = styled.ul``;
const menuAnimation = keyframes`
  0% {
    color: #ff8989;
  }

  50% {
    color: #b90000;
  }

  100% {
    color: #ff8989;
  }
`;

const SocialMediaItem = styled.li`
  display: inline-block;
  margin: 0 0.3rem;
  font-size: 1.65rem;
  & svg {
    border-radius: 1rem;
  }

  color: #666;
  transition: 450ms;
  :hover {
    color: #fff;
    transition: 450ms;
  }

  &.menu {
    animation: ${menuAnimation} 3s infinite;
  }
`;

type SocialProps = {
  className?: string;
  icon: IconDefinition;
};

export const SocialMedia: React.FC<SocialProps> = (props) => {
  return (
    <SocialMediaItem className={props.className}>
      <FontAwesomeIcon icon={props.icon} />
    </SocialMediaItem>
  );
};
