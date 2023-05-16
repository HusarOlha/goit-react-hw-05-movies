import { useState, useEffect } from 'react';
import { GetCast } from 'components/Services/GetMovie';
import { useParams } from 'react-router-dom';
import { CastContainer, Name, Character, Image, Card } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchMovieCast = async () => {
      try {
        const response = await GetCast(movieId);
        setCard(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CastContainer>
      {card.map(({ id, name, character, profile_path }) => (
        <Card key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxr1R7VtfzTnb7T1xo3RWbgrPNbf3RgvJ63abVkeyzxq1gLGb50lacEnZof8bSf4h4Ww&usqp=CAU'
            }
            alt={name}
            width="176px"
            height="264px"
          />
          <Name>{name}</Name>
          <Character>Character: {character}</Character>
        </Card>
      ))}
    </CastContainer>
  );
};

export default Cast;
