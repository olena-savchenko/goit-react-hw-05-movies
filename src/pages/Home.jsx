import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import {Link} from 'react-router-dom'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
          const trendingMovies = await fetchTrendingMovies();
          console.log(trendingMovies);
      
            setMovies(trendingMovies.results);
        
        //   setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);
  return (
    <main>
          <h1>Trending today</h1>
          <ul>{movies.map(movie => {
              return (
                <Link to={`movies/${movie.id}`}>
                  <li key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt="poster"
                    />
                    <p>{movie.title}</p>
                  </li>
                </Link>
              );             
          })}</ul>
    </main>
  );
};

export default Home;
