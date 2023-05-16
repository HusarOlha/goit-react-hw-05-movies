import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { GetFullInfoMovie } from 'components/Services/GetMovie';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import BackLink from 'components/BackLink';
import styled from '@emotion/styled';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus('loading');
    const fetchMovieDetails = async () => {
      try {
        const response = await GetFullInfoMovie(movieId);
        setMovie(response);
        setStatus('success');
      } catch (error) {
        setError(error);
        setStatus('error');
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (status === 'idle' || status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Main>
      <BackLink to={backLinkLocationRef.current}> Back </BackLink>
      <MovieDescription movie={movie} />
    </Main>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default MovieDetails;
