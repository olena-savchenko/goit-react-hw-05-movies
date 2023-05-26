import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import Section from 'components/Section/Section';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledTitle } from 'components/Layout/Layout.styled';


const MovieDetails = () => {
  // отримуємо динамічне значення :movieId
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

  return (
    <>
      {/* рендер картки фільму з детальним описом */}
      <Section>
        <MovieCard movie={movieDitails} />
      </Section>

      {/* секція додаткової інформації про фільм(актори, відгуки) */}
      <Section>
        <StyledTitle>Additional information</StyledTitle>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
