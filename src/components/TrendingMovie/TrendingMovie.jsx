import { Link } from 'react-router-dom';
import {
  ListContainer,
  ListItem,
  ListText,
  Image,
  ListTitle,
} from './TrendingMovie.styled';
const TrendingMovieList = ({ trendMovies }) => {
  console.log(trendMovies.results);
  // const movies = trendMovies.results;
  // return (
  //   <ListContainer>
  //     <ListTitle>Trending today</ListTitle>
  //     {movies.map(movie => (
  //       <ListItem key={movie.id}>
  //         <li key={movie.id}>
  //           <ListText>{movie.title}</ListText>
  //           <Link to={`/movies/${movie.id}`}>
  //             <Image
  //               src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
  //               alt={movie.title}
  //             />
  //           </Link>
  //         </li>
  //       </ListItem>
  //     ))}
  //   </ListContainer>
  // );
};

export default TrendingMovieList;
