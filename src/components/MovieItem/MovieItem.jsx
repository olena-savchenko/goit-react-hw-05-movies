import { LinkItem, StyledMovieTitle } from "./MovieItem.styled";


const MovieItem = ({ movie }) => {
  const { id, poster_path, title } = movie;
  
    return (
      <LinkItem to={`movies/${id}`}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt='poster'
          />
        )}
        <StyledMovieTitle>{title}</StyledMovieTitle>
      </LinkItem>
    )

}
export default MovieItem;