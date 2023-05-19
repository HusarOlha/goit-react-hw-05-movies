import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetMovieHome } from 'components/Services/GetMovie';
import { MovieList } from 'components/MovieList/MovieList';
import Loader from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovies = async () => {
      setStatus('loading');
      try {
        const response = await GetMovieHome(abortController);
        setMovies(response.results);
        setStatus('success');
      } catch (error) {
        setError(error);
        setStatus('error');
      }
    };
    fetchMovies();
    return () => {
      abortController.abort();
    };
  }, []);

  if (status === 'idle' || status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    console.log(error.message);
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Text>Trending Movies</Text>
      <MovieList items={movies} location={{ from: location }} />
    </Container>
  );
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200;
  padding: 0 15px;
`;

const Text = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;
export default Home;
