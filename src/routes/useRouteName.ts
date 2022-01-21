import { useCallback } from 'react';
import Routes from './routes.json';
import { useLocation } from 'react-router-dom';

type UseRouteName = {
  pathname: string;
  getRoute(): {
    name: string;
    url: string;
  };
};

function useRouteName(): UseRouteName {
  const { pathname } = useLocation();
  const getRoute = useCallback(() => {
    const route = Routes.filter((item) => {
      const routeBasename = item.url.split('/')[1];
      const basename = pathname.split('/')[1].toLowerCase();

      return basename === routeBasename;
    })[0];
    
    if (!route) {
      return {
        name: 'Not Found',
        url: '/not-found',
      };
    }
    return route;
  }, [pathname]);

  return { pathname, getRoute };
}

export { useRouteName };
