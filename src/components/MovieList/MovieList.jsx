import { Link } from 'react-router-dom';
import {
  ListContainer,
  ListItem,
  ListText,
  Image,
  ListTitle,
  List,
} from './MovieList.styled';

export const MovieList = ({ items }) => {
  return (
    <ListContainer>
      <ListTitle>Trending movies</ListTitle>
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
