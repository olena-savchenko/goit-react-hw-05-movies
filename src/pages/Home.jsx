import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import Section from 'components/Section/Section';
import { StyledTitle } from 'components/Layout/Layout.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // отримання trending movies today
    const getTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
  
      <Section>
        {
          <>
            <StyledTitle>trending today</StyledTitle>
            <MovieList movies={movies} />
          </>
        }
      </Section>
  
  );
};

export default Home;
