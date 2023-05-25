import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ca2ab125ed7ebd844a69223863b31d2b';

// ЗАПИТ НА ТРЕНДОВІ ФІЛЬМИ ДНЯ
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

// ЗАПИТ НА ФІЛЬМ ПО ID
export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

// ЗАПИТ ФІЛЬМА ЗА ПОШУКОВИМ СЛОВОМ
export const fetchMovieByName = async searchQuery => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  );
  return data;
}

