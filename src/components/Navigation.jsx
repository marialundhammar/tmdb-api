import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar className='navigation' variant='dark' expand='md'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <h1>The Movie Database API</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} end to='/'>
              Popular Movies
            </Nav.Link>
            <Nav.Link as={NavLink} end to='/TopMovies'>
              Top Movies
            </Nav.Link>
            <Nav.Link as={NavLink} end to='/TheaterMovies'>
              Theater Movies
            </Nav.Link>
            <Nav.Link as={NavLink} end to='/Genres'>
              Genres Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
