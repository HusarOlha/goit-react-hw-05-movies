import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

import { Toaster } from 'react-hot-toast';
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: 'white',
            color: 'black',
          },
          success: {
            duration: 500,
          },
        }}
      ></Toaster>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
