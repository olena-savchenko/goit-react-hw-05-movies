import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route} from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';

export const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />

            {/* маршрут з динамічним параметром */}
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              {/* вкладені маршрути */}
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
  );
};
