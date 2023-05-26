
import MovieItem from "../MovieItem/MovieItem";
import { StyledMovieList } from "./MovieList.styled";
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
          {movies.map(movie => {
            return <MovieItem key={movie.id} movie={movie} />
          })}
    </StyledMovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })),
};
export default MovieList;
