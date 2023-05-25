import { StyledPoster } from 'components/MovieItem/MovieItem.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDitails, setMovieDitails] = useState({});

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const data = await fetchMovieById(movieId);
        setMovieDitails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  const { poster_path, title, release_date, overview } = movieDitails;

  return (
    <>
      {poster_path && (
        <StyledPoster
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`${title} poster`}
        />
      )}

      <h2>
        {title}
        {release_date}
      </h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
    </>
  );
};

export default MovieDetails;
