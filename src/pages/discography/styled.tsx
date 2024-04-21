import React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import { WidthLimiter } from '../../styles';
import PageHeader from '../../components/template/page-title/header';

export const DiscographyContainer = styled.div`
  background-color: #292929;
  padding: 0 2rem;
  ${WidthLimiter}

  @media screen and (max-width: 800px) {
    &.release {
      padding: 0 .8rem;
    }
  }
`;

export const DiscographyTitle = styled(PageHeader)`
  background-color: white;
  @media (max-width: 340px) {
    font-size: 1.3rem;
  }
`

export const DiscographyNavbar = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${WidthLimiter}

  border-bottom: 1px solid #666;
  padding: 1rem 1rem;
`;

const StyledNavbarItem = styled.li`
  width: calc(20% - 20px);
  min-width: 139px;
  transition: .5s;

  @media (max-width: 968px) {
    :first-child {
      width: calc(100% - 25px);
    }
    width: calc(50% - 20px);
    margin: .3rem 0;
  }
  
  @media (max-width: 340px) {
    :first-child {
      width: 100%;
    }
    width: 100%;
  }
`;

const NavbarItemLink = styled(Link)`
  background-color: #444;
  transition: 500ms;

  color: white;
  border: 1px solid #888;
  
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  
  display: inline-block;
  width: 100%;
  padding: 0.4rem 0;
  border-radius: 0.3rem;

  :hover{
    background-color: rgb(102, 102, 102);
    transition: 500ms;
  }

  &.lower {
    text-transform: none;
  }
`;

export const NavbarItem: React.FC<LinkProps> = (props) => {
  return (
    <StyledNavbarItem>
      <NavbarItemLink {...props}></NavbarItemLink>
    </StyledNavbarItem>
  );
};
