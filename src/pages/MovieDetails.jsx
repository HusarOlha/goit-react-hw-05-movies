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
    const abortController = new AbortController();
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
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <Main>
      {status === 'idle' || status === 'loading' ? (
        <Loader />
      ) : error && error.message !== 'error' ? (
        <p>Sorry we have error:{error.message} please reload page!</p>
      ) : (
        <>
          <BackLink to={backLinkLocationRef.current?.from?.pathname || '/'}>
            Back
          </BackLink>

          <MovieDescription movie={movie} />
        </>
      )}
    </Main>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default MovieDetails;
