import { LinkItem, StyledMovieItem, StyledMovieTitle, StyledPoster } from "./MovieItem.styled";
// import NoImage from '.'
import poster from 'pictures/no-clip.webp'
const MovieItem = ({ movie }) => {
  const { id, poster_path, title } = movie;
  // let urlImg = '';

  // poster_path
  //   ? (urlImg = `https://image.tmdb.org/t/p/w300${poster_path}`)
  //   : (urlImg = `${poster}`
  //       );
  
  return (
    <StyledMovieItem>
      <LinkItem to={`/movies/${id}`}>
        <StyledPoster
          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : poster}
          alt="poster"
        />

        <StyledMovieTitle>{title}</StyledMovieTitle>
      </LinkItem>
    </StyledMovieItem>
  );

}
export default MovieItem;