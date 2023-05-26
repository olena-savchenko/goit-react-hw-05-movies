// import { StyledPoster } from 'components/MovieItem/MovieItem.styled';
import {  Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import Section from 'components/Section/Section';
import MovieCard from 'components/MovieCard/MovieCard';
// import { StyledTitle } from 'components/App.styled';
// import Cast from 'components/Cast/Cast';

const MovieDetails = () => {
  // отримуємо динамічне значення :movieId
  const { movieId } = useParams();

  const [movieDitails, setMovieDitails] = useState({});

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const data = await fetchMovieById(movieId);
        setMovieDitails(data);
        // console.log(data);
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
      <Outlet />
    </>
  );
};

export default MovieDetails;
