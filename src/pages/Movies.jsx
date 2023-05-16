import SearchBar from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { GetMoviesBySearch } from 'components/Services/GetMovie';
// import MovieList from 'components/TrendingMovie';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movieItems, setMovieItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  function handleSubmit(newQuery) {
    setQuery(newQuery);
    setPage(1);
  }

  useEffect(() => {
    setLoading(true);
    setStatus('loading');

    const fetchMoviesBySearch = async () => {
      try {
        if (!query.trim()) {
          setLoading(false);
          setStatus('idle');
          return;
        }

        const resp = await GetMoviesBySearch(query, page);

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
  }, [page, query]);

  if (status === 'loading' && loading) {
    return <Loader />;
  }

  if (status === 'failed') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      {/* <MovieList items={movieItems} /> */}
    </div>
  );
};

export default Movies;
