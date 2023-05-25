import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
// import {Link} from 'react-router-dom'
import {
  LinkItem,
  StyledMovieTitle,
  StyledHomeTitle,
} from '../components/App.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
          const trendingMovies = await fetchTrendingMovies();
          console.log(trendingMovies);
      
            setMovies(trendingMovies.results);
        
      } catch (error) {
        console.log('ПОмилка в home: ', error);
      }
    };

    getTrendingMovies();
  }, []);
  return (
    <main>
          <StyledHomeTitle>Trending today</StyledHomeTitle>
          <ul>{movies.map(movie => {
              return (
                <li key={movie.id}>
                  <LinkItem to={`movies/${movie.id}`}>
                    {/* <img
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt="poster"
                    /> */}
                    {movie.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="poster"
                      />
                    )}
                    <StyledMovieTitle>{movie.title}</StyledMovieTitle>
                  </LinkItem>
                </li>
              );             
          })}</ul>
    </main>
  );
};

export default Home;
