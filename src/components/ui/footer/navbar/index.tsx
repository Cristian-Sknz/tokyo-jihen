import React, { useCallback, useState } from 'react';

import { useRouteName } from '../../../../routes/useRouteName';
import Routes from '../../../../routes/routes.json';
import classnames from 'classnames'

import {
  NavigationBar,
  NavigationDisplay,
  NavigationItemContainer,
  NavigationItems,
  NavigationLink,
} from '../styled';
import { LinkElementProps } from '../../../template/link';

export const NavbarItem: React.FC<LinkElementProps> = (props) => {
  return (
    <NavigationItemContainer>
      <NavigationLink {...props}>
        {props.children}
      </NavigationLink>
    </NavigationItemContainer>
  );
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const { getRoute } = useRouteName();

  const changeDisplay = useCallback((e: string | null) => {
    return () => (e) ? setActive(e) : setActive(null);
  }, []);

  return (
    <NavigationBar>
      <NavigationItems>
        {Routes.map((item, index) => (
          <NavbarItem
            key={item.name}
            className={classnames({'active': getRoute() === item})}
            to={item.url.toLowerCase()}
            onMouseEnter={changeDisplay(item.name)}
            onMouseLeave={changeDisplay(null)}
            external={item.external}
          >
            {index + 1}
          </NavbarItem>
        ))}
      </NavigationItems>
      <NavigationDisplay>{(active) ? active : getRoute().name}</NavigationDisplay>
    </NavigationBar>
  );
};

export default Navbar;
