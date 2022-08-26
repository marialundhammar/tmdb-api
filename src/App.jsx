import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import PopularMoviesPage from './pages/PopMovies';
import TopMoviesPage from './pages/TopMovies';
import TheaterMoviesPage from './pages/TheaterMovies';
import SingleMoviePage from './pages/SingleMovie';
import SingleActorPage from './pages/SingleActor';
import GenresPage from './pages/GenresPage';
import GenrePage from './pages/GenrePage';
import './assets/scss/App.scss';

function App() {
  return (
    <div id='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<PopularMoviesPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/topMovies' element={<TopMoviesPage />} />
        <Route path='/theaterMovies' element={<TheaterMoviesPage />} />
        <Route path='/movie/:id' element={<SingleMoviePage />} />
        <Route path='/actor/:id' element={<SingleActorPage />} />
        <Route path='/genres' element={<GenresPage />} />
        <Route path='/genre/:id' element={<GenrePage />} />
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  );
}

export default App;
