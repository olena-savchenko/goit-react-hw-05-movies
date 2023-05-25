import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Header, StyledLink} from './App.styled';
import Logotype from '../pictures/making-video.png';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <div>
      <Container>
        <Header>
          <Link to="/">
            <img src={Logotype} alt="" width="80px" />
          </Link>

          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
};
