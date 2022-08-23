import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PopularMoviesPage from './pages/PopMovies';
import TopMoviesPage from './pages/TopMovies';
import TheaterMoviesPage from './pages/TheaterMovies';
import SingleMoviePage from './pages/SingleMovie';
import SingleActorPage from './pages/SingleActor';
import './assets/scss/App.scss';

function App() {
  return (
    <div id='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/popMovies' element={<PopularMoviesPage />} />
        <Route path='/topMovies' element={<TopMoviesPage />} />
        <Route path='/theaterMovies' element={<TheaterMoviesPage />} />
        <Route path='/movie/:id' element={<SingleMoviePage />} />
        <Route path='/actor/:id' element={<SingleActorPage />} />
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  );
}

export default App;
