import styled from 'styled-components';
import { TokyoIncidentsLogo as Logo } from '../../template/page-title/styled'

export const RemoteControlContainer = styled.div`
  position: absolute;
  z-index: 417;
  top: 1.5rem;
  left: -16rem;
  transition: left 750ms;
  &.active {
    left: 2rem;
    transition: left 750ms;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #888;

  min-width: 200px;
  padding-top: 2rem;
  border: 0.8rem solid #c3c3c3;
  border-radius: 1rem;
`;

export const ButtonsIlustration = styled.img`
  display: inline-block;
  max-width: 120px;
  margin: 0 auto;
  user-select: none;
`;

export const ControlNavbar = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 0.8rem;
`;

export const NavbarListItem = styled.li`
  background-color: #c3c3c3;
  border-radius: 0.3rem;
  width: 100%;
  max-width: 138px;
  margin: 0 auto;
  text-align: center;
  padding: 0.15rem 0;
  & a {
    display: inline-block;
    width: 100%;

    color: #222;
    font-size: 1.015rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: -1px;
  }

  &.active {
    background-color: #e50012;
  }
`;

export const TokyoIncidentsLogo = styled(Logo)`
  margin: 1rem auto;
  display: inline-block;
  filter: contrast(0.3) brightness(1);
  transition: 750ms;
  :hover {
    filter: contrast(0.3) brightness(3);
    transition: 750ms;
  }
`;