import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ListContainer,
  ListItem,
  ListText,
  Image,
  List,
} from './MovieList.styled';

export const MovieList = ({ items }) => {
  return (
    <ListContainer>
      <ListItem>
        {items.map(item => (
          <List key={item.id}>
            <ListText>{item.title}</ListText>
            <Link to={`/movies/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title}
              />
            </Link>
          </List>
        ))}
      </ListItem>
    </ListContainer>
  );
};
MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
