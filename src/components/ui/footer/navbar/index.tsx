import React, { useCallback, useState } from 'react';

import { useRouteName } from '../../../../routes/useRouteName';
import Routes from '../../../../routes/routes.json';
import classnames from 'classnames'

import {
  NavigationBar,
  NavigationDisplay,
  NavigationItem,
  NavigationItems,
} from '../styled';

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
          <NavigationItem
            className={classnames({'active': getRoute() === item})}
            key={item.name}
            to={item.url.toLowerCase()}
            onMouseEnter={changeDisplay(item.name)}
            onMouseLeave={changeDisplay(null)}
            isExternal={item.external}
          >
            {index + 1}
          </NavigationItem>
        ))}
      </NavigationItems>
      <NavigationDisplay>{(active) ? active : getRoute().name}</NavigationDisplay>
    </NavigationBar>
  );
};

export default Navbar;
