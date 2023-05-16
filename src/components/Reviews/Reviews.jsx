import { useState, useEffect } from 'react';
import { GetReviews } from 'components/Services/GetMovie';
import { useParams } from 'react-router-dom';
import { Container, Author, Text } from './Reviews.styled';
import Loader from 'components/Loader';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setStatus('loading');
      setLoading(true);

      try {
        const response = await GetReviews(movieId);
        setReviewList(response);
        setStatus('success');
      } catch (error) {
        setError(error);
        setStatus('error');
      }

      setLoading(false);
    };

    fetchMovieReviews();
  }, [movieId]);

  if (status === 'idle') {
    return null;
  }

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  if (reviewList.length === 0 && status === 'success') {
    return <Text>Sorry, we don't have any reviews for this movie.</Text>;
  }

  return (
    <Container>
      {reviewList.map(({ id, author, content }) => (
        <div key={id}>
          <ul>
            <li>
              <Author>Author: {author}</Author>
              <Text>{content}</Text>
            </li>
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default Reviews;
