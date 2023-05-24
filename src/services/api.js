import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=ca2ab125ed7ebd844a69223863b31d2b&language=en-US'
  );
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=ca2ab125ed7ebd844a69223863b31d2b&language=en-US`
  );
  return data;
};

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = 'ca2ab125ed7ebd844a69223863b31d2b';

// https://api.themoviedb.org/3/movie/550?api_key=ca2ab125ed7ebd844a69223863b31d2b
//    const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTJhYjEyNWVkN2ViZDg0NGE2OTIyMzg2M2IzMWQyYiIsInN1YiI6IjY0NmRmY2ZjYTUwNDZlMDEyNDY5ZGQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2T9vMxipkd2uznlye6LSF9Csk51lT8VzhImm8aiSftA'
//   }
// };

//  export const fetchTrendingMovies = () => {

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }
