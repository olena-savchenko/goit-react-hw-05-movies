
import MovieItem from "../MovieItem/MovieItem";
import { StyledMovieList } from "./MovieList.styled";

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
          {movies.map(movie => {
              return <MovieItem key={movie.id} movie={movie} />
          })}
    </StyledMovieList>
  );
};
export default MovieList;
