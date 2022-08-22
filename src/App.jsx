import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PopularMoviesPage from './pages/PopMovies';
import './assets/scss/App.scss';

function App() {
  return (
    <div id='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/popMovies' element={<PopularMoviesPage />} />
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  );
}

export default App;
