import { useEffect, useState } from 'react';
import { GetTrendingMovies } from 'components/Services/GetMovie';
import TrendingMovieList from 'components/TrendingMovie/TrendingMovie';
import Loader from 'components/Loader';
import styled from '@emotion/styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await GetTrendingMovies();
        setMovies(response);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error]);

  return (
    <main>
      <Section>
        {loading && <Loader></Loader>}
        <div>
          <TrendingMovieList trendMovies={movies} />
        </div>
      </Section>
    </main>
  );
};

const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200;
  padding: 0 15px;
`;

export default Home;
