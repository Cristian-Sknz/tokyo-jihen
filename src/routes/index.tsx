import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Loading from '../components/template/loading';
import NotFound from '../pages/notfound';

const News = React.lazy(() => import('../pages/news'));
const Discography = React.lazy(() => import('../pages/discography'));
const DiscographySingle = React.lazy(() => import('../pages/discography/single'));
const DiscographyAlbum = React.lazy(() => import('../pages/discography/album'));
const DiscographyDvD = React.lazy(() => import('../pages/discography/dvd'));
const DiscographyOther = React.lazy(() => import('../pages/discography/other'));
const DiscographyRelease = React.lazy(() => import('../pages/discography/release'));
const LivePage = React.lazy(() => import('../pages/live'));
const Biography = React.lazy(() => import('../pages/biography'));
const LinkPage = React.lazy(() => import('../pages/link'));

const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <ReactRoutes>
        <Route path={'/'} element={<News/>} />

        <Route path={'/discography'} element={<Discography />}>
          <Route path={''} element={<DiscographyRelease/>} />
          <Route path={'single'} element={<DiscographySingle />} />
          <Route path={'album'} element={<DiscographyAlbum />} />
          <Route path={'dvd'} element={<DiscographyDvD />} />
          <Route path={'other'} element={<DiscographyOther />} />
        </Route>

        <Route path={'/live'} element={<LivePage/>} />
        <Route path={'/biography'} element={<Biography/>} />
        <Route path={'/link'} element={<LinkPage/>} />
        <Route path={'/417'} element={<Loading/>} />
        <Route path={'*'} element={<NotFound />} />
      </ReactRoutes>
    </React.Suspense>
  );
};

export default Routes;