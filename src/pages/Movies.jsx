import SearchBar from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { GetMoviesBySearch } from 'components/Services/GetMovie';
import { MovieList } from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movieItems, setMovieItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setStatus('loading');
    const abortController = new AbortController();
    const fetchMoviesBySearch = async () => {
      try {
        if (!movieName) {
          setLoading(false);
          setStatus('idle');
          return;
        }

        const resp = await GetMoviesBySearch(movieName, page, abortController);

        setMovieItems(resp.results);
        setLoading(false);
        setStatus('succeeded');

        if (resp.results.length === 0) {
          toast.error('Sorry, we cannot find any movies for your search.');
        }
      } catch (error) {
        setError(error);
        setLoading(false);
        setStatus('failed');
      }
    };

    fetchMoviesBySearch();
    return () => {
      abortController.abort();
    };
  }, [page, movieName]);

  const updateQueryString = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);

    setMovieItems([]);
    setPage(1);
  };

  if (status === 'loading' && loading) {
    return <Loader />;
  }

  if (status === 'failed') {
    console.log(error.message);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {error && error.message !== 'error' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}
      <SearchBar value={movieName} onSubmit={updateQueryString} />
      <MovieList items={movieItems} location={{ from: location }} />
    </div>
  );
};

export default Movies;
