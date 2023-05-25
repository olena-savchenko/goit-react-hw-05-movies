import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import { StyledHomeTitle } from '../components/App.styled';



const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    // отримання trending movies today
    const getTrendingMovies = async () => {
      try {
          const {results} = await fetchTrendingMovies();
          setMovies(results);
        
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);
  
  return (
    <main>
      <StyledHomeTitle>trending today</StyledHomeTitle>
      <MovieList movies={movies} />     
    </main>
  );
};

export default Home;
