import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Poster,
  Title,
  Score,
  SectionTitle,
  Overview,
  Genres,
  AdditionalInfo,
  AdditionalInfoTitle,
  InfoLink,
  ContainerInfo,
  ContainerPoster,
  List,
} from './MovieDescription.styled';

const MovieDescription = ({ movie }) => {
  return (
    <Container>
      <ContainerPoster>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <ContainerInfo>
          <Title>{movie.title}</Title>
          <Score>⭐ {Math.round(movie.vote_average * 10)}%</Score>
          <SectionTitle>Overview</SectionTitle>
          <Overview>{movie.overview}</Overview>
          <SectionTitle>Genres</SectionTitle>
          <Genres>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </Genres>
        </ContainerInfo>
      </ContainerPoster>
      <AdditionalInfo>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <List>
          <InfoLink to="cast">Cast</InfoLink>
          <InfoLink to="reviews">Reviews</InfoLink>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};
MovieDescription.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieDescription;
