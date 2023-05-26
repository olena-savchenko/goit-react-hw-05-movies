import { LinkItem, StyledMovieItem, StyledMovieTitle, StyledPoster } from "./MovieItem.styled";

import poster from 'pictures/no-clip.webp'
const MovieItem = ({ movie }) => {

  const { id, poster_path, title } = movie;

  return (
    <StyledMovieItem>
      <LinkItem to={`/movies/${id}`}>
        <StyledPoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : poster
          }
          alt={`${title} poster`}
        />

        <StyledMovieTitle>{title}</StyledMovieTitle>
      </LinkItem>
    </StyledMovieItem>
  );

}
export default MovieItem;