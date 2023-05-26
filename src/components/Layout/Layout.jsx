import { Link, Outlet } from 'react-router-dom';
import Logotype from 'pictures/making-video.png';
import { Container, Header, StyledLink } from '../App.styled';

const Layout = () => {
  return (
    <>
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

        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};
export default Layout;
