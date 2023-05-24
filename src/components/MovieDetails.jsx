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
        console.log('Деталі фільму: ', data);
          setMovieDitails(data);
       
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

    const { poster_path } = movieDitails;
    return (
      <>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt="poster"
          />
        )}
        {/* <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt="poster"
        /> */}
        {/* 
            {movie.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="poster"
                      />
                    )}
             */}
        <h2>
          {movieDitails.title}
          {movieDitails.release_date}
        </h2>
        <h3>Overview</h3>
        <p>{movieDitails.overview}</p>
        <h3>Genres</h3>
      </>
    );
};

export default MovieDetails;
