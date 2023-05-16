import { Routes, Route } from 'react-router-dom';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Reviews from './Reviews/Reviews';
import Movies from 'pages/Movies';
import { Toaster } from 'react-hot-toast';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
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
          <Route path="movies" element={<Movies></Movies>} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews></Reviews>} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
