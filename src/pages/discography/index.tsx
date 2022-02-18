import React, { Fragment } from 'react';
import { Outlet, useHref } from 'react-router-dom';
import Loading from '../../components/template/loading';
import {
  DiscographyNavbar,
  NavbarList,
  NavbarItem,
  DiscographyTitle
} from './styled';

const Discography: React.FC = () => {
  const href = useHref('/discography');

  return (
    <Fragment>
      <DiscographyTitle title='Discography'>
        <DiscographyNavbar>
          <NavbarList>
            <NavbarItem to={`${href}`}>New Release</NavbarItem>
            <NavbarItem to={`${href}/single`}>Single</NavbarItem>
            <NavbarItem to={`${href}/album`}>Album</NavbarItem>
            <NavbarItem to={`${href}/dvd`} className='lower'>
              DVD / Blu-ray
            </NavbarItem>
            <NavbarItem to={`${href}/other`}>Other</NavbarItem>
          </NavbarList>
        </DiscographyNavbar>
      </DiscographyTitle>
      <React.Suspense fallback={<Loading withBottom/>}>
        <Outlet />
      </React.Suspense>
    </Fragment>
  );
};

export default Discography;
