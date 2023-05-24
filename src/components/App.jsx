import  Home  from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, StyledLink, Logo } from './App.styled';
import Logotype from '../pictures/making-video.png'
// import { MovieDetails } from './MovieDetails';

export const App = () => {
  return (
    <div>
      <Container>
        <Header>
          <Logo>
            <img src={Logotype} alt="" width="60px" />
            <span>MovieHouse</span>
          </Logo>

          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<div>Опис фільму</div>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
};
