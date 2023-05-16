import { Link } from 'react-router-dom';
import { ListContainer, ListItem, ListText, Image } from './MovieList.styled';
const MovieList = ({ items }) => {
  return (
    <ListContainer>
      {items.map(item => (
        <ListItem key={item.id}>
          <li key={item.id}>
            <ListText>{item.title}</ListText>
            <Link to={`/movies/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title}
              />
            </Link>
          </li>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default MovieList;
