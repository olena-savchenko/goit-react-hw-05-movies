import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../services/api';
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from 'components/MovieList/MovieList';

// глобальні змінні для попереджень
const WARNING_MSG = 'Sorry, there are no images matching your search query';
const INFO_MSG = 'You just entered this search name';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // початкове значення searchQuery: '', useEffect перший раз при монтуванні компонента здійснює запит з порожнім рядком
    // забороняємо це перевіркою на не пустий рядок.
    if (!searchQuery) {
      return;
    }

    const getMovieByName = async () => {
      try {
        const { results } = await fetchMovieByName(searchQuery);
        // якщо запит повернув порожній масив(нічого не знайдено), виводимо повідомлення
        if (results.length === 0) {
          return toast.info(WARNING_MSG);
        }
        setMovie(results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieByName();
  }, [searchQuery]);


  // передаємо значення пошукового запиту при сабміті форми з класу Searchbar
  const handleSearch = searchName => {
    // якщо пошукове слово нового і попереднього запиту співпадають, виходимо повідомлення
    if (searchName === searchQuery) {
      return toast.info(INFO_MSG);
    }
    setSearchQuery(searchName);
  };

  return (
    <>
      {/* Контейнер для повідомлень про помилку запиту */}
      <ToastContainer autoClose={3000} transition={Flip} position="top-center" />
      <Searchbar handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
