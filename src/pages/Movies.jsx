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

  /**
   * 
  useEffect(() => {
    // початкове значення searchQuery: '', useEffect перший раз при монтуванні компонента здійснює запит з порожнім рядком
    // забороняємо це перевіркою на не пустий рядок.
    if (!searchQuery) {
      return;
    }

    async function getData() {
      try {
        setLoading(true); //для завантаження лоадера

        // запит на pixabay-api
        const data = await getImages(searchQuery, page);
        // масив з об'єктами картинок
        const images = data.hits;

        // якщо запит повернув порожній масив(нічого не знайдено), виводимо повідомлення
        if (images.length === 0) {
          return toast.info(WARNING_MSG);
        }

        // якщо перша сторінка, перезаписуємо масив картинок, якщо не перша, додаємо до попередніх
        page === 1
          ? setImages(images)
          : setImages(prevState => [...prevState, ...images]);

        setTotal(data.total);
      } catch (error) {
        toast.error(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);
   */

  // передаємо значення пошукового запиту при сабміті форми з класу Searchbar
  const handleSearch = searchName => {
    // якщо пошукове слово нового і попереднього запиту співпадають, виходимо повідомлення
    if (searchName === searchQuery) {
      return toast.info(INFO_MSG);
    }
    setSearchQuery(searchName);
    // setPage(1);
  };

  return (
    <>
      {/* Контейнер для повідомлень про помилку запиту */}
      <ToastContainer autoClose={3000} transition={Flip} position="top-center" />
      <Searchbar handleSearch={handleSearch} />
      {/* <Section>{<MovieList movies={movies} />}</Section> */}
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
