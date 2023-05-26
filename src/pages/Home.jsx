import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import { StyledTitle } from '../components/App.styled';
import Section from 'components/Section/Section';

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
    <main>
      <Section>
        {
          <>
            <StyledTitle>trending today</StyledTitle>
            <MovieList movies={movies} />
          </>
        }
      </Section>
    </main>
  );
};

export default Home;
